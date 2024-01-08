import type { Album } from "~/lib/api";

import NavLinkItem from "./NavLinkItem";

type NavLinkAlbumProps = {
  album: Album;
};

export default function NavLinkAlbum({ album }: NavLinkAlbumProps) {
  const [artist] = album.artists;
  return (
    <NavLinkItem>
      <NavLinkItem.Image src={album.cover} />
      <NavLinkItem.Content>
        <NavLinkItem.Title>{album.title}</NavLinkItem.Title>
        <NavLinkItem.Subtitle>
          <span className="capitalize">{album.type}</span>{" "}
          <span className="text-xs">•</span> {artist}
        </NavLinkItem.Subtitle>
      </NavLinkItem.Content>
    </NavLinkItem>
  );
}
