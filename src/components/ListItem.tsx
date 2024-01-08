import type { Album, Playlist } from "~/lib/api";

import PlayButton from "./PlayButton";

type ListItemProps = {
  item: Album | Playlist;
};

export default function ListItem({ item }: ListItemProps) {
  return (
    <div className="group relative flex h-12 cursor-pointer items-center gap-2 rounded-md bg-[#ffffff12] shadow-inner transition-colors duration-300 hover:bg-[#ffffff33]">
      <picture className="h-full">
        <img
          className="aspect-square h-full rounded-l-md object-cover"
          alt="cover"
          src={item.cover}
        />
        <PlayButton className="absolute bottom-0 right-0 top-0 scale-[0.7] opacity-0 transition-all group-hover:opacity-100" />
      </picture>
      <div>
        <p className="text-sm font-bold">{item.title}</p>
      </div>
    </div>
  );
}
