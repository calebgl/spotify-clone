export async function getLists() {
  type Lists = {
    albums: Album[];
    playlists: Playlist[];
    artists: Artist[];
  };

  const { albums, playlists, artists } = list.reduce<Lists>(
    (acc, curr) => {
      switch (curr.type) {
        case "playlist":
          acc.playlists.push(curr);
          break;
        case "album":
          acc.albums.push(curr);
          break;
        case "artist":
          acc.artists.push(curr);
          break;
      }
      return acc;
    },
    { albums: [], playlists: [], artists: [] },
  );

  return { albums, playlists, artists };
}

export const colors = {
  red: { accent: "#da2735", dark: "#7f1d1d" },
  orange: { accent: "#cc5400", dark: "#7c2d12" },
  yellow: { accent: "#ffae00", dark: "#78350f" },
  green: { accent: "#21c872", dark: "#14532d" },
  teal: { accent: "#2ee9d7", dark: "#134e4a" },
  blue: { accent: "#1e3a8a", dark: "#1e3a8a" },
  indigo: { accent: "#394bd5", dark: "#312e81" },
  purple: { accent: "#df24ff", dark: "#581c87" },
  pink: { accent: "#f33b73", dark: "#831843" },
  emerald: { accent: "#0c6e54", dark: "#064e3b" },
  rose: { accent: "#ed2377", dark: "#871b48" },
  gray: { accent: "#555555", dark: "#27272a" },
};

export type List = {
  id: string;
  cover: string;
};

export type Playlist = List & {
  type: "playlist";
  title: string;
  author: string;
  songs: Song[];
};

export type Album = List & {
  type: "album";
  title: string;
  artists: string[];
  songs: Song[];
};

export type Artist = List & {
  type: "artist";
  name: string;
};

export type Song = {
  id: string;
  title: string;
};

export const list: (Playlist | Album | Artist)[] = [
  {
    id: "e9411d7e-5e1e-465e-8750-eaba0bc5c745",
    type: "playlist",
    author: "Spotify",
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
    title: "Jaque mate",
    songs: [],
  },
  {
    id: "e9411d7e-5e1e-465e-8750-baba0bc5c745",
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
    type: "artist",
    name: "TWICE",
  },
  {
    id: "df83f020-943a-4f50-a854-13de5932ce2f",
    cover:
      "https://lofigirl.com/wp-content/uploads/elementor/thumbs/Clean_CREEPSHOW-qg0qaaieyz0z3yr8lfyw1c4x9wd43hpsxw9bjfqqhs.jpg",
    type: "album",
    title: "CREEPSHOW",
    artists: ["Thaehan"],
    songs: [
      { id: "b7b36e79-534b-458f-ae9e-0feba6160413", title: "Witches Arise" },
    ],
  },
  {
    id: "7cea378a-e16e-4873-bfab-15557417c9c8",
    cover:
      "https://lofigirl.com/wp-content/uploads/elementor/thumbs/Tenno_SleepWalker-scaled-qi5j6u9t73243id625x5l4vw9bdtulwzm2l2xxwqlc.jpg",
    type: "album",
    title: "Sleeping Soul",
    artists: ["Tenno"],
    songs: [{ id: "", title: "" }],
  },
  {
    id: "0195d88d-4b7b-4fa0-b7b9-8dd7b3d0488d",
    cover:
      "https://lofigirl.com/wp-content/uploads/elementor/thumbs/Kosmic-koala-lofi16-9-scaled-qg0zl6gdw1gnikbb377tdtv0dxqwhd72bfn0uf79nk.jpg",
    type: "album",
    title: "Black Hole Gargantuan",
    artists: ["Le Metroid", "adfsasdf", "adsfads", "dfasfasd", "adfsasdf"],
    songs: [{ id: "", title: "" }],
  },
  {
    id: "123",
    cover:
      "https://lofigirl.com/wp-content/uploads/elementor/thumbs/Kupla-16.9-scaled-qg0z5up4gahc7gkrl2pt873forafz1cmjkp04zxd40.jpg",
    type: "album",
    title: "Somewhere. Nowhere.",
    artists: ["Kupla"],
    songs: [{ id: "", title: "" }],
  },
  {
    id: "1a305831-2866-4479-a949-c00cf533f54c",
    cover:
      "https://lofigirl.com/wp-content/uploads/elementor/thumbs/mountain-qg0yyet4ciamaldw1cx4zkp2dxyu1at4iqrmd4ykdc.png",
    type: "album",
    title: "Nights Like This",
    artists: ["Late Night Tones", "Pierson Booth"],
    songs: [{ id: "", title: "" }],
  },
  {
    id: "7df6d53e-6149-4b55-bfb8-b1d14cfdec36",
    cover:
      "https://lofigirl.com/wp-content/uploads/elementor/thumbs/Lofi-leucid16-9-scaled-qg0y9td5ikmihx41nq6kqs4usz72mf5z5088ahff6o.jpg",
    type: "album",
    title: "faded",
    artists: ["Lucid Keys"],
    songs: [{ id: "", title: "" }],
  },
  {
    id: "f8e802fa-9ec3-4910-8690-d35b792da6b4",
    cover:
      "https://lofigirl.com/wp-content/uploads/elementor/thumbs/20230519_CATSTYLE_TIBEAU2-qg2tbgbsqipov962pja1u7i44sokuq52nek8i4pbq8.png",
    type: "album",
    title: "Fairy Tales",
    artists: ["Dario Lessing", "Claudia Lessing", "Tibeauthetraveler"],
    songs: [{ id: "", title: "" }],
  },
  {
    id: "126",
    cover:
      "https://lofigirl.com/wp-content/uploads/elementor/thumbs/Clean_CREEPSHOW-qg0qaaieyz0z3yr8lfyw1c4x9wd43hpsxw9bjfqqhs.jpg",
    type: "album",
    title: "CREEPSHOW",
    artists: ["Thaehan"],
    songs: [{ id: "", title: "" }],
  },
  {
    id: "124",
    cover:
      "https://lofigirl.com/wp-content/uploads/elementor/thumbs/kainbeats1980-qg0pp7ynro6kund2mu2yn5jxvy7wjr2f1lsh94zfz4.png",
    type: "album",
    title: "Path to Shing",
    artists: ["kainbeats"],
    songs: [{ id: "", title: "" }],
  },
  {
    id: "128",
    cover:
      "https://lofigirl.com/wp-content/uploads/elementor/thumbs/Luvpug_Final-qg0zxuc3yospxfx4569vh4tkhtbx6kgvq41ilmfbts.jpg",
    type: "album",
    title: "Sunset",
    artists: ["Spaniel Mac", "Luv pug"],
    songs: [{ id: "", title: "" }],
  },
  {
    id: "129",
    cover:
      "https://lofigirl.com/wp-content/uploads/elementor/thumbs/Kosmic-koala-lofi16-9-scaled-qg0zl6gdw1gnikbb377tdtv0dxqwhd72bfn0uf79nk.jpg",
    type: "album",
    title: "Black Hole",
    artists: ["Le Metroid"],
    songs: [{ id: "", title: "" }],
  },
  {
    id: "125",
    cover:
      "https://lofigirl.com/wp-content/uploads/elementor/thumbs/Kupla-16.9-scaled-qg0z5up4gahc7gkrl2pt873forafz1cmjkp04zxd40.jpg",
    type: "album",
    title: "Somewhere. Nowhere.",
    artists: ["Kupla"],
    songs: [{ id: "", title: "" }],
  },
  {
    id: "130",
    cover:
      "https://lofigirl.com/wp-content/uploads/elementor/thumbs/mountain-qg0yyet4ciamaldw1cx4zkp2dxyu1at4iqrmd4ykdc.png",
    type: "album",
    title: "Nights Like This",
    artists: ["Late Night Tones", "Pierson Booth"],
    songs: [{ id: "", title: "" }],
  },
  {
    id: "131",
    cover:
      "https://lofigirl.com/wp-content/uploads/elementor/thumbs/20230519_CATSTYLE_TIBEAU2-qg2tbgbsqipov962pja1u7i44sokuq52nek8i4pbq8.png",
    type: "album",
    title: "Fairy Tales",
    artists: ["Dario Lessing", "Claudia Lessing", "Tibeauthetraveler"],
    songs: [{ id: "", title: "" }],
  },
];

// export type Playlist = {
//   id: string;
//   albumId: number;
//   title: string;
//   color: (typeof colors)[keyof typeof colors];
//   cover: string;
//   artists: string[];
// }

// export const playlists: Playlist[] = [
//   {
//     id: "1",
//     albumId: 1,
//     title: "Chill Lo-Fi Music",
//     color: colors.yellow,
//     cover:
//       "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
//     artists: ["NoSpirit", "Casiio"],
//   },
//   {
//     id: "2",
//     albumId: 2,
//     title: "Lo-Fi Chill Session",
//     color: colors.green,
//     cover:
//       "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
//     artists: ["Kupla", "Blue Fox"],
//   },
//   {
//     id: "3",
//     albumId: 3,
//     title: "Study Session",
//     color: colors.rose,
//     cover: "https://f4.bcbits.com/img/a1435058381_65.jpg",
//     artists: ["Tenno", "xander", "Team Astro"],
//   },
//   {
//     id: "4",
//     albumId: 4,
//     title: "Blue Note Study Time",
//     color: colors.blue,
//     cover: "https://f4.bcbits.com/img/a1962013209_16.jpg",
//     artists: ["Raimu", "Yasumu"],
//   },
//   {
//     id: "5",
//     albumId: 5,
//     title: "Chau Saura Session",
//     color: colors.purple,
//     cover: "https://f4.bcbits.com/img/a2793859494_16.jpg",
//     artists: ["Chau Saura", "amies", "kyu"],
//   },
//   {
//     id: "6",
//     albumId: 6,
//     title: "Like a Necessity",
//     color: colors.orange,
//     cover: "https://f4.bcbits.com/img/a0363730459_16.jpg",
//     artists: ["WFS", "Nadav Cohen"],
//   },
// ];
//
// export const morePlaylists = playlists.map((item) => ({
//   ...item,
//   id: item.id + "_more",
// }));
//
// export const sidebarPlaylists = playlists.map((item) => ({
//   ...item,
//   id: item.id + "_side",
// }));
//
// export const allPlaylists = [
//   ...playlists,
//   ...morePlaylists,
//   ...sidebarPlaylists,
// ];
//
// export interface Song {
//   id: number;
//   albumId: number;
//   title: string;
//   image: string;
//   artists: string[];
//   album: string;
//   duration: string;
// }
//
// export const songs: Song[] = [
//   {
//     id: 1,
//     albumId: 1,
//     title: "Moonlit Walk",
//     image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
//     artists: ["LoFi Dreamer"],
//     album: "Chill Lo-Fi Music",
//     duration: "3:12",
//   },
//   {
//     id: 2,
//     albumId: 1,
//     title: "Coffee Daze",
//     image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
//     artists: ["LoFi Dreamer"],
//     album: "Chill Lo-Fi Music",
//     duration: "4:07",
//   },
//   {
//     id: 3,
//     albumId: 1,
//     title: "Skyline Serenade",
//     image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
//     artists: ["LoFi Dreamer"],
//     album: "Chill Lo-Fi Music",
//     duration: "3:50",
//   },
//   {
//     id: 4,
//     albumId: 1,
//     title: "Urban Echoes",
//     image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
//     artists: ["LoFi Dreamer"],
//     album: "Chill Lo-Fi Music",
//     duration: "3:30",
//   },
//   {
//     id: 5,
//     albumId: 1,
//     title: "Night's End",
//     image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
//     artists: ["LoFi Dreamer"],
//     album: "Chill Lo-Fi Music",
//     duration: "4:20",
//   },
//   {
//     id: 1,
//     albumId: 2,
//     title: "Silent Rain",
//     image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
//     artists: ["Urban Nocturne"],
//     album: "Midnight Tales",
//     duration: "3:40",
//   },
//   {
//     id: 2,
//     albumId: 2,
//     title: "Lost Pages",
//     image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
//     artists: ["Urban Nocturne"],
//     album: "Midnight Tales",
//     duration: "3:20",
//   },
//   {
//     id: 3,
//     albumId: 2,
//     title: "Midnight Tales",
//     image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
//     artists: ["Urban Nocturne"],
//     album: "Midnight Tales",
//     duration: "3:50",
//   },
//   {
//     id: 4,
//     albumId: 2,
//     title: "City Lights",
//     image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
//     artists: ["Urban Nocturne"],
//     album: "Midnight Tales",
//     duration: "3:30",
//   },
//   {
//     id: 5,
//     albumId: 2,
//     title: "Night Drive",
//     image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
//     artists: ["Urban Nocturne"],
//     album: "Midnight Tales",
//     duration: "4:20",
//   },
//   {
//     id: 1,
//     albumId: 3,
//     title: "Lunar",
//     image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
//     artists: ["Tenno"],
//     album: "Study Session",
//     duration: "3:40",
//   },
//   {
//     id: 2,
//     albumId: 3,
//     title: "Go go go!",
//     image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
//     artists: ["Tenno"],
//     album: "Study Session",
//     duration: "3:20",
//   },
//   {
//     id: 3,
//     albumId: 3,
//     title: "Keep focus!",
//     image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
//     artists: ["Tenno"],
//     album: "Study Session",
//     duration: "2:40",
//   },
//   {
//     id: 4,
//     albumId: 3,
//     title: "JavaScript is the way",
//     image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
//     artists: ["Tenno"],
//     album: "Study Session",
//     duration: "3:10",
//   },
//   {
//     id: 5,
//     albumId: 3,
//     title: "No more TypeScript for me",
//     image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
//     artists: ["Tenno"],
//     album: "Study Session",
//     duration: "2:10",
//   },
//   {
//     id: 1,
//     albumId: 4,
//     title: "Lunar",
//     image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
//     artists: ["Tenno"],
//     album: "Study Session",
//     duration: "3:40",
//   },
//   {
//     id: 2,
//     albumId: 4,
//     title: "Go go go!",
//     image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
//     artists: ["Tenno"],
//     album: "Study Session",
//     duration: "3:20",
//   },
//   {
//     id: 3,
//     albumId: 4,
//     title: "Keep focus!",
//     image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
//     artists: ["Tenno"],
//     album: "Study Session",
//     duration: "2:40",
//   },
//   {
//     id: 4,
//     albumId: 4,
//     title: "JavaScript is the way",
//     image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
//     artists: ["Tenno"],
//     album: "Study Session",
//     duration: "3:10",
//   },
//   {
//     id: 5,
//     albumId: 4,
//     title: "No more TypeScript for me",
//     image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
//     artists: ["Tenno"],
//     album: "Study Session",
//     duration: "2:10",
//   },
//   {
//     id: 1,
//     albumId: 5,
//     title: "Moonlit Walk",
//     image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
//     artists: ["LoFi Dreamer"],
//     album: "Chill Lo-Fi Music",
//     duration: "3:12",
//   },
//   {
//     id: 2,
//     albumId: 5,
//     title: "Coffee Daze",
//     image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
//     artists: ["LoFi Dreamer"],
//     album: "Chill Lo-Fi Music",
//     duration: "4:07",
//   },
//   {
//     id: 3,
//     albumId: 5,
//     title: "Skyline Serenade",
//     image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
//     artists: ["LoFi Dreamer"],
//     album: "Chill Lo-Fi Music",
//     duration: "3:50",
//   },
//   {
//     id: 4,
//     albumId: 5,
//     title: "Urban Echoes",
//     image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
//     artists: ["LoFi Dreamer"],
//     album: "Chill Lo-Fi Music",
//     duration: "3:30",
//   },
//   {
//     id: 5,
//     albumId: 5,
//     title: "Night's End",
//     image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
//     artists: ["LoFi Dreamer"],
//     album: "Chill Lo-Fi Music",
//     duration: "4:20",
//   },
// ];
