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
      <img
        src="/cd.png"
        alt="CD Icon"
        className={`w-14 h-14 md:w-16 md:h-16 ${playing ? "animate-spin" : ""} transition-all`}
        style={{ borderRadius: "100%" }}
      />
      <audio ref={audioRef} src="/website-music.mp3" loop />
    </div>
  );
}
  