import type { Album, Playlist } from "~/lib/api";

import PlayButton from "./PlayButton";

function formatList(list: string[]): string {
  const formatter = new Intl.ListFormat("en-US");
  return formatter.format(list);
}

type CardProps = {
  item: Album | Playlist;
};

export default function Card({ item }: CardProps) {
  let inlineArtists = "";
  if (item.type === "album") {
    inlineArtists = formatList(item.artists);
  }

  return (
    <li className="group flex cursor-pointer flex-col gap-4 rounded-lg bg-[#181818] p-4 transition-all duration-300 hover:bg-[#282828]">
      <picture className="relative">
        <img
          className="aspect-square w-full rounded-md object-cover group-hover:shadow-lg"
          alt="cover"
          src={item.cover}
        />
        <PlayButton className="absolute bottom-2 right-2 translate-y-4 text-black opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100" />
      </picture>
      <div>
        <p className="font-bold">{item.title}</p>

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
