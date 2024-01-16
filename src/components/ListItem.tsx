"use client";

import Image from "next/image";

import Pause from "~/icons/Pause";
import Play from "~/icons/Play";
import type { Album, Playlist } from "~/lib/api";
import { usePlayerStore } from "~/stores/player";

import PlayButton from "./PlayButton";

type ListItemProps = {
  item: Album | Playlist;
};

export default function ListItem({ item }: ListItemProps) {
  const listId = usePlayerStore((state) => state.listId);
  const currently = usePlayerStore((state) => state.currently);

  const pause = usePlayerStore((state) => state.pause);
  const resume = usePlayerStore((state) => state.resume);
  const play = usePlayerStore((state) => state.play);

  const isPlaying = currently === "playing" && listId === item.id;
  const isPaused = currently === "paused" && listId === item.id;

  const handlePlay = () => {
    if (isPlaying) {
      pause();
    } else if (isPaused) {
      resume();
    } else {
      const [song] = item.songs;
      play(song?.title ?? "", item.id);
    }
  };

  return (
    <div className="group relative flex h-12 cursor-pointer items-center gap-2 rounded-md bg-[#ffffff12] shadow-inner transition-colors duration-300 hover:bg-[#ffffff33]">
      <picture className="h-full">
        <img
          className="aspect-square h-full rounded-l-md object-cover"
          alt="cover"
          src={item.cover}
        />
      </picture>
      <div className="flex w-full justify-between pr-4">
        <p className="text-sm font-bold">{item.title}</p>
        <div className="">
          <PlayButton
            className="absolute bottom-0 right-0 top-0 scale-[0.7] text-black opacity-0 transition-all group-hover:opacity-100"
            onClick={handlePlay}
          >
            {isPlaying ? (
              <Pause className="aspect-square w-6" />
            ) : (
              <Play className="aspect-square w-6" />
            )}
          </PlayButton>
          {isPlaying && (
            <Image
              className="aspect-square w-4"
              height={128}
              width={128}
              src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif"
              alt="playing"
            />
          )}
        </div>
      </div>
    </div>
  );
}
