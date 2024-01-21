"use client";

import Image from "next/image";

import Next from "~/icons/Next";
import Pause from "~/icons/Pause";
import Play from "~/icons/Play";
import Previous from "~/icons/Previous";
import { usePlayerStore } from "~/stores/player";

import PlayerTrack from "./PlayerTrack";
import VolumeControl from "./VolumeControl";

export default function Player() {
  const currently = usePlayerStore((state) => state.currently);
  const pause = usePlayerStore((state) => state.pause);
  const resume = usePlayerStore((state) => state.resume);
  const next = usePlayerStore((state) => state.next);
  const previous = usePlayerStore((state) => state.previous);
  const isPlaying = currently === "playing";

  const handleClick = () => {
    isPlaying ? pause() : resume();
  };

  return (
    <div className="grid h-full grid-cols-12 items-center justify-between">
      <div className="col-span-3 flex h-full min-h-0 items-center gap-4">
        <div className="aspect-square h-full">
          <Image
            width={256}
            height={256}
            className="aspect-square rounded-md object-cover"
            src="https://lofigirl.com/wp-content/uploads/2023/11/The-Ocean_F01.png"
            alt="current song"
          />
        </div>
        <div>
          <p className="text-sm font-bold">Discovering The Edge</p>
          <p className="text-xs text-neutral-400">
            Alto, Two Scents, Lenny Loops
          </p>
        </div>
      </div>
      <div className="col-span-6 grid place-items-center gap-2">
        <div className="flex items-center gap-5">
          <Previous
            className="h-4 w-4 cursor-pointer text-[#ffffffb3] transition-colors hover:text-white"
            onClick={previous}
          />
          <div
            className="grid h-7 w-7 cursor-pointer place-content-center rounded-full bg-white p-2 text-black"
            onClick={handleClick}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </div>
          <Next
            className="h-4 w-4 cursor-pointer text-[#ffffffb3] transition-colors hover:text-white"
            onClick={next}
          />
        </div>
        <div className="h-4 w-full">
          <PlayerTrack />
        </div>
      </div>
      <div className="col-span-3 grid w-full justify-items-end">
        <VolumeControl />
      </div>
    </div>
  );
}
