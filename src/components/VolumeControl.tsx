"use client";

import { useEffect, useRef, useState } from "react";

import VolumeHigh from "~/icons/VolumeHigh";
import VolumeLow from "~/icons/VolumeLow";
import VolumeMedium from "~/icons/VolumeMedium";
import VolumeMuted from "~/icons/VolumeMuted";

import Slider from "./Slider";

export default function VolumeControl() {
  const [volume, setVolume] = useState(30);
  const previousVolumeRef = useRef<number>(0);

  useEffect(() => {
    const audio = new Audio();
    audio.volume = 0;
  }, []);

  const handleMute = () => {
    setVolume(0);
    previousVolumeRef.current = volume;
  };

  const handleUnmute = () => {
    setVolume(previousVolumeRef.current);
    previousVolumeRef.current = volume;
  };

  const Volume = () => {
    if (volume === 0) {
      return (
        <VolumeMuted
          className="h-4 w-4 text-neutral-400"
          onClick={handleUnmute}
        />
      );
    } else if (volume > 0 && volume < 30) {
      return (
        <VolumeLow className="h-4 w-4 text-neutral-400" onClick={handleMute} />
      );
    } else if (volume >= 30 && volume < 60) {
      return (
        <VolumeMedium
          className="h-4 w-4 text-neutral-400"
          onClick={handleMute}
        />
      );
    } else {
      return (
        <VolumeHigh className="h-4 w-4 text-neutral-400" onClick={handleMute} />
      );
    }
  };

  return (
    <div className="group flex gap-2">
      <Volume />
      <Slider
        className="w-24"
        max={100}
        min={0}
        value={[volume]}
        onValueChange={(value) => {
          const [newVolume] = value;
          setVolume(newVolume);
        }}
      />
    </div>
  );
}
