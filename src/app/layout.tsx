import { clsx } from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavLinkAlbum from "~/components/NavLinkAlbum";
import NavLinkArtist from "~/components/NavLinkArtist";
import NavLinkButton from "~/components/NavLinkButton";
import NavLinkPlaylist from "~/components/NavLinkPlaylist";
import Home from "~/icons/Home";
import Search from "~/icons/Search";
import { list } from "~/lib/api";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Unofficial Spotify Clone for demonstration purposes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "grid h-[100svh] min-h-0 gap-2 bg-black p-2 text-white",
        )}
      >
        <aside className="min-h-0 [grid-area:aside]">
          <nav className="flex h-full flex-col gap-2">
            <div className="rounded-lg bg-[#121212] px-3 py-2">
              <ul className="grid items-center">
                <NavLinkButton href="/">
                  <Home />
                  <p>Home</p>
                </NavLinkButton>
                <NavLinkButton href="/search">
                  <Search />
                  <p>Search</p>
                </NavLinkButton>
              </ul>
            </div>
            <div className="flex h-full min-h-0 flex-col rounded-lg bg-[#121212] px-3 py-2">
              <p>aside</p>
              <ul className="overflow-y-scroll">
                {list.map((item) => {
                  switch (item.type) {
                    case "album":
                      return <NavLinkAlbum album={item} key={item.id} />;

                    case "artist":
                      return <NavLinkArtist artist={item} key={item.id} />;

                    case "playlist":
                      return <NavLinkPlaylist playlist={item} key={item.id} />;

                    default:
                      throw new Error("not found");
                  }
                })}
              </ul>
            </div>
          </nav>
        </aside>
        <main className="min-h-0 overflow-y-scroll [grid-area:main]">
          <div className="h-full rounded-lg bg-[#121212] px-3 py-2">
            {children}
          </div>
        </main>
        <footer className="[grid-area:player]">
          <div className="h-24 p-2">player</div>
        </footer>
      </body>
    </html>
  );
}
