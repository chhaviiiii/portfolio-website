import { useRef, useState } from "react";

export default function CDPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const handleToggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
      onClick={handleToggle}
      title={playing ? "Pause music" : "Play music"}
    >
      <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-[#A92EA3] hover:border-pink-500 transition-colors shadow-lg hover:shadow-[0_0_20px_rgba(169,46,163,0.5)]">
        <img
          src={playing ? "/music1.gif" : "/still.png"}
          alt="Music Player"
          className="w-full h-full object-cover"
        />
      </div>
      <audio ref={audioRef} src="/website-music.mp3" loop />
    </div>
  );
}
  