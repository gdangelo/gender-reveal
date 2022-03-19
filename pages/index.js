import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { VolumeOffIcon, VolumeUpIcon } from '@heroicons/react/outline';

export default function Home() {
  const audioRef = useRef();
  const [playing, setPlaying] = useState(false);

  const VolumeIcon = playing ? VolumeUpIcon : VolumeOffIcon;

  useEffect(() => {
    const audio = audioRef.current;

    if (playing && audio) {
      audio.play();
    }
    if (!playing && audio) {
      audio.pause();
    }
  }, [playing]);

  return (
    <div>
      <audio ref={audioRef} loop className="hidden">
        <source src="heartbeat.mp3" type="audio/mp3" />
        <source src="heartbeat.ogg" type="audio/ogg" />
      </audio>

      <div className="z-10 absolute top-6 sm:top-8 left-1/2 transform -translate-x-1/2">
        <p className="text-white text-normal sm:text-xl uppercase bg-gray-900 px-4 py-1 rounded-full font-medium bg-opacity-60 text-center">
          Fais un choix
        </p>
        <button
          type="button"
          onClick={() => setPlaying(prev => !prev)}
          className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 translate-x-full hover-hover:opacity-50 hover:opacity-100 transition appearance-none"
        >
          <VolumeIcon className="text-white w-10 h-10 sm:ml-4 sm:w-12 sm:h-12" />
        </button>
      </div>

      <div className="h-screen overflow-hidden flex flex-col sm:flex-row">
        <Link href="/reveal?choice=g">
          <a className="flex-1 bg-pink-500 hover:bg-opacity-90 flex items-center justify-center transition">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white inline-flex items-center space-x-8">
              Fille
            </h1>
          </a>
        </Link>
        <Link href="/reveal?choice=b">
          <a className="flex-1 bg-blue-500 hover:bg-opacity-90 flex items-center justify-center transition">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white">
              Garçon
            </h1>
          </a>
        </Link>
      </div>
    </div>
  );
}
