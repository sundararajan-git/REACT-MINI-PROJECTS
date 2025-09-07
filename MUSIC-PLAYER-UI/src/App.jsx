import React, { useState, useRef } from "react";

const tracks = [
  {
    name: "Track 1",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    name: "Track 2",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    name: "Track 3",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];

export default function App() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setIsPlaying(false);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <h1 className="text-4xl mb-6 font-bold">🎧 Music Player</h1>

      <p className="text-2xl mb-4">{tracks[currentTrack].name}</p>

      <audio
        ref={audioRef}
        src={tracks[currentTrack].src}
        onEnded={nextTrack}
      />

      <div className="flex gap-4 mb-4">
        <button
          onClick={prevTrack}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Prev
        </button>
        <button
          onClick={togglePlay}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          onClick={nextTrack}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-sm">
        *Audio source from SoundHelix (sample MP3s)*
      </p>
    </div>
  );
}
