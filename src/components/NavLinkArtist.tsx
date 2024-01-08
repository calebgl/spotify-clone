import type { Artist } from "~/lib/api";

import NavLinkItem from "./NavLinkItem";

type NavLinkArtistProps = {
  artist: Artist;
};
export default function NavLinkArtist({ artist }: NavLinkArtistProps) {
  return (
    <NavLinkItem>
      <NavLinkItem.Image className="rounded-full" src={artist.cover} />
      <NavLinkItem.Content>
        <NavLinkItem.Title>{artist.name}</NavLinkItem.Title>
        <NavLinkItem.Subtitle>
          <span className="capitalize">{artist.type}</span>
        </NavLinkItem.Subtitle>
      </NavLinkItem.Content>
    </NavLinkItem>
  );
}
