"use client";

import VolumeHigh from "~/icons/VolumeHigh";
import VolumeLow from "~/icons/VolumeLow";
import VolumeMedium from "~/icons/VolumeMedium";
import VolumeMuted from "~/icons/VolumeMuted";
import { usePlayerStore } from "~/stores/player";

import Slider from "./Slider";

export default function VolumeControl() {
  const volume = usePlayerStore((state) => state.volume);
  const mute = usePlayerStore((state) => state.mute);
  const unmute = usePlayerStore((state) => state.unmute);
  const changeVolume = usePlayerStore((state) => state.changeVolume);

  const handleVolume = (value: number[]) => {
    const [newVolume] = value;
    changeVolume(newVolume);
  };

  const Volume = () => {
    if (volume === 0) {
      return (
        <VolumeMuted
          className="h-8 w-8 cursor-pointer p-2 text-neutral-400"
          onClick={unmute}
        />
      );
    } else if (volume > 0 && volume < 30) {
      return (
        <VolumeLow
          className="h-8 w-8 cursor-pointer p-2 text-neutral-400"
          onClick={mute}
        />
      );
    } else if (volume >= 30 && volume < 60) {
      return (
        <VolumeMedium
          className="h-8 w-8 cursor-pointer p-2 text-neutral-400"
          onClick={mute}
        />
      );
    } else {
      return (
        <VolumeHigh
          className="h-8 w-8 cursor-pointer p-2 text-neutral-400"
          onClick={mute}
        />
      );
    }
  };

  return (
    <div className="group flex">
      <Volume />
      <Slider
        className="w-24"
        max={100}
        min={0}
        value={[volume]}
        onValueChange={handleVolume}
      />
    </div>
  );
}
