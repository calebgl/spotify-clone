import Card from "~/components/Card";
import Header from "~/components/Header";
import ListItem from "~/components/ListItem";
import { getLists } from "~/lib/api";

export default async function Home() {
  const { playlists, albums } = await getLists();
  return (
    <div className="flex h-full flex-col gap-6 overflow-y-scroll">
      <Header />
      <div className="flex flex-col gap-10 px-5 pb-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Good evening</h1>
          <ul className="grid grid-cols-3 gap-2">
            {[...playlists, ...albums].slice(0, 6).map((item) => (
              <ListItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Your top mixes</h2>
          <ul className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {[...playlists, ...albums].map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
