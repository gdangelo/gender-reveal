import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
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
      <Head>
        <title>Gender Reveal</title>
        <meta name="description" content="Gender Reveal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <audio ref={audioRef} loop>
        <source src="heartbeat.mp3" type="audio/mp3" />
      </audio>

      <button
        type="button"
        onClick={() => setPlaying(prev => !prev)}
        className="z-10 absolute top-4 sm:top-6 right-4 sm:right-8 opacity-50 hover:opacity-100 transition"
      >
        <VolumeIcon className="text-white w-10 h-10 sm:w-12 sm:h-12" />
      </button>

      <p className="z-10 absolute top-6 sm:top-8 left-1/2 transform -translate-x-1/2 text-white text-normal sm:text-xl uppercase bg-gray-900 px-4 py-1 rounded-full font-medium bg-opacity-60 text-center">
        Fais un choix
      </p>

      <main className="h-screen overflow-hidden flex flex-col sm:flex-row">
        <Link href="/reveal?choice=g">
          <a
            type="button"
            className="flex-1 bg-pink-500 hover:bg-opacity-90 flex items-center justify-center transition"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white inline-flex items-center space-x-8">
              Fille
            </h1>
          </a>
        </Link>
        <Link href="/reveal?choice=b">
          <a
            type="button"
            className="flex-1 bg-blue-500 hover:bg-opacity-90 flex items-center justify-center transition"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white">
              Garçon
            </h1>
          </a>
        </Link>
      </main>
    </div>
  );
}
