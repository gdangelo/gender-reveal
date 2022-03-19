import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { shootFireworks } from '../utils';

const Reveal = () => {
  const router = useRouter();
  const { choice } = router.query;

  const [timer, setTimer] = useState(10);
  const [blue, setBlue] = useState(choice === 'b');

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
    if (timer === 0) {
      shootFireworks({ duration: 10000, count: 50 });
    }
  }, [timer]);

  return (
    <div
      className={classNames(
        'h-screen overflow-hidden flex items-center justify-center',
        timer <= 0 ? 'bg-gray-50' : blue ? 'bg-blue-500' : 'bg-pink-500'
      )}
    >
      <h1 className={classNames('text-[16rem] font-bold text-white')}>
        {timer > 0 ? timer : null}
      </h1>
    </div>
  );
};

export default Reveal;
