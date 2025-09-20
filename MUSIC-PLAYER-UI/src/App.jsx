import { useState, useRef } from "react";
import "./App.css";
import { FaHeadphonesAlt } from "react-icons/fa";

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
      <div className="flex items-center gap-3 justify-center mb-8">
        <FaHeadphonesAlt className="text-4xl text-purple-600" />
        <h1 className="text-4xl font-semibold">Music Player</h1>
      </div>

      <p className="text-2xl mb-4">{tracks[currentTrack].name}</p>

      <audio
        ref={audioRef}
        src={tracks[currentTrack].src}
        onEnded={nextTrack}
      />

      <div className="flex gap-4 mb-4">
        <button
          onClick={prevTrack}
          className="px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 cursor-pointer"
        >
          Prev
        </button>
        <button
          onClick={togglePlay}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          onClick={nextTrack}
          className="px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 cursor-pointer"
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
