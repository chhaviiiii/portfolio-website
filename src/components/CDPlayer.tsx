"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function CDPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      void el
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  return (
    <div className="group fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-2">
      <p className="pointer-events-none max-w-[12rem] text-right text-xs leading-snug text-text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        Website soundtrack
      </p>
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Pause website music" : "Play website music"}
        className="relative h-14 w-14 overflow-hidden rounded-md border border-rule bg-card shadow-sm transition-colors hover:border-accent/40"
      >
        <Image
          src={playing ? "/music1.gif" : "/still.png"}
          alt=""
          fill
          className="object-cover"
          sizes="56px"
          unoptimized
        />
      </button>
      <audio ref={audioRef} src="/website-music.mp3" loop preload="none" />
    </div>
  );
}
