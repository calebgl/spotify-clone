"use client";

import Pause from "~/icons/Pause";
import Play from "~/icons/Play";
import type { Album, Playlist } from "~/lib/api";
import { cn } from "~/lib/utils";
import { usePlayerStore } from "~/stores/player";

import PlayButton from "./PlayButton";

function formatList(list: string[]): string {
  const formatter = new Intl.ListFormat("en-US");
  return formatter.format(list);
}

type CardProps = {
  item: Album | Playlist;
};

export default function Card({ item }: CardProps) {
  const listId = usePlayerStore((state) => state.listId);
  const currently = usePlayerStore((state) => state.currently);

  const pause = usePlayerStore((state) => state.pause);
  const resume = usePlayerStore((state) => state.resume);
  const play = usePlayerStore((state) => state.play);

  const isPlaying = currently === "playing" && listId === item.id;
  const isPaused = currently === "paused" && listId === item.id;

  let inlineArtists = "";
  if (item.type === "album") {
    inlineArtists = formatList(item.artists);
  }

  const handlePlay = () => {
    if (isPlaying) {
      pause();
    } else if (isPaused) {
      resume();
    } else {
      play(item.id);
    }
  };

  return (
    <li className="group flex cursor-pointer flex-col gap-4 rounded-lg bg-[#181818] p-4 transition-all duration-300 hover:bg-[#282828]">
      <picture className="relative">
        <img
          className="aspect-square w-full rounded-md object-cover group-hover:shadow-lg"
          alt="cover"
          src={item.cover}
        />
        <PlayButton
          onClick={handlePlay}
          className={cn(
            "absolute bottom-2 right-2 translate-y-4 text-black opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100",
            { "translate-y-0 opacity-100": isPlaying },
          )}
        >
          {isPlaying ? (
            <Pause className="aspect-square w-6" />
          ) : (
            <Play className="aspect-square w-6" />
          )}
        </PlayButton>
      </picture>
      <div>
        <p className="line-clamp-1 font-bold">{item.title}</p>

        {item.type === "album" ? (
          <p className="line-clamp-2 text-sm text-neutral-400">
            {inlineArtists}
          </p>
        ) : null}

        {item.type === "playlist" ? (
          <p className="line-clamp-2 text-sm text-neutral-400">
            De {item.author}
          </p>
        ) : null}
      </div>
    </li>
  );
}
