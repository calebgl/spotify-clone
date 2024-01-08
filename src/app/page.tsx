import Card from "~/components/Card";
import ListItem from "~/components/ListItem";
import { Album, Playlist, list } from "~/lib/api";

export default function Home() {
  const { albums, playlists } = list.reduce<{
    albums: Album[];
    playlists: Playlist[];
  }>(
    (acc, curr) => {
      const { albums, playlists } = acc;
      if (curr.type === "playlist") {
        playlists.push(curr);
      } else if (curr.type === "album") {
        albums.push(curr);
      }
      return { albums, playlists };
    },
    { albums: [], playlists: [] },
  );

  return (
    <div className="flex flex-col gap-6 p-2">
      <div className="flex flex-col gap-4">
        <h1 className="mb-4 text-2xl font-bold">Good evening</h1>
        <ul className="grid grid-cols-3 gap-2">
          {[...playlists, ...albums].slice(0, 6).map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Your top mixes</h2>
        <ul className="grid grid-cols-5 gap-6">
          {[...playlists, ...albums].map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
