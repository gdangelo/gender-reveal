import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import classNames from 'classnames';
import { shootFireworks } from '../utils';

import reveal from '/public/gender_reveal.gif';

const Reveal = () => {
  const router = useRouter();
  const { choice } = router.query;

  const [timer, setTimer] = useState(10);
  const [blue, setBlue] = useState(choice === 'b');
  const [loaded, setLoaded] = useState(false);
  const [shouldFire, setShouldFire] = useState(false);

  const shouldReveal = timer <= 0;

  useEffect(() => {
    let intervalId = setInterval(
      () => {
        setTimer(prev => (prev > 0 ? prev - 1 : prev));
        setBlue(prev => (timer > 0 ? !prev : prev));
      },
      timer > 3 ? 1000 : 2000
    );

    return () => clearInterval(intervalId);
  }, [timer]);

  useEffect(() => {
    if (loaded) {
      let intervalId = setTimeout(() => setShouldFire(true), 1000);
      return () => clearInterval(intervalId);
    }
  }, [loaded]);

  useEffect(() => {
    if (shouldFire) {
      shootFireworks({ duration: 10000, count: 50 });
    }
  }, [shouldFire]);

  return (
    <div
      className={classNames(
        'h-screen overflow-hidden flex items-center justify-center',
        timer <= 0 ? 'bg-gray-50' : blue ? 'bg-blue-500' : 'bg-pink-500'
      )}
    >
      <h1
        className={classNames(
          'text-[10rem] sm:text-[16rem] font-bold text-white',
          shouldReveal && 'hidden'
        )}
      >
        {timer}
      </h1>
      {shouldReveal ? (
        <Image
          src={reveal}
          quality={100}
          priority={true}
          onLoadingComplete={() => setLoaded(true)}
        />
      ) : null}
    </div>
  );
};

export default Reveal;
