import type { Playlist } from "~/lib/api";

import NavLinkItem from "./NavLinkItem";

type NavLinkPlaylistProps = {
  playlist: Playlist;
};

export default function NavLinkPlaylist({ playlist }: NavLinkPlaylistProps) {
  return (
    <NavLinkItem>
      <NavLinkItem.Image src={playlist.cover} />
      <NavLinkItem.Content>
        <NavLinkItem.Title>{playlist.title}</NavLinkItem.Title>
        <NavLinkItem.Subtitle>
          <span className="capitalize">{playlist.type}</span>{" "}
          <span className="text-xs">•</span> {playlist.author}
        </NavLinkItem.Subtitle>
      </NavLinkItem.Content>
    </NavLinkItem>
  );
}
