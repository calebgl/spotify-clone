"use client";

import { useEffect, useState } from "react";

import { usePlayerStore } from "~/stores/player";

import Slider from "./Slider";

function formatTime(time: number) {
  if (time === null || time === 0 || isNaN(time)) {
    return `0:00`;
  }

  const seconds = Math.floor(time % 60);
  const minutes = Math.floor(time / 60);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default function PlayerTrack() {
  const [currentTime, setCurrentTime] = useState(0);
  const audio = usePlayerStore((state) => state.audio);
  const duration = audio?.duration ?? 0;

  useEffect(() => {
    if (!audio) {
      return;
    }

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime ?? 0);
    const handleEnded = () => {};

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audio]);

  const handleValueChange = (value: number[]) => {
    if (!audio) {
      return;
    }

    const [newCurrentTime] = value;
    audio.currentTime = newCurrentTime;
  };

  return (
    <div className="flex justify-center gap-2">
      <div className="w-8 text-right text-xs">{formatTime(currentTime)}</div>
      <Slider
        className="w-2/3"
        defaultValue={[0]}
        value={[currentTime]}
        max={duration}
        min={0}
        onValueChange={handleValueChange}
      />
      <div className="w-8 text-xs">{formatTime(duration)}</div>
    </div>
  );
}
