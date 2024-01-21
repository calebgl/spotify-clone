import { create } from "zustand";

import { type Song, getLists } from "~/lib/api";
import { Queue } from "~/lib/utils";

export type PlayerState = {
  audio: HTMLAudioElement | undefined;
  currently: "paused" | "playing";
  listId: string | undefined;
  songId: string | undefined;
  songIndex: number;
  songs: Song[];
  volume: number;
  previousVolume: number;
};

export type PlayerAction = {
  pause: () => void;
  resume: () => void;
  play: (listId: string) => void;
  mute: () => void;
  unmute: () => void;
  changeVolume: (volume: number) => void;
  next: () => void;
  previous: () => void;
};

export const usePlayerStore = create<PlayerState & PlayerAction>(
  (set, get) => ({
    audio: undefined,
    currently: "paused",
    listId: undefined,
    songId: undefined,
    songIndex: 0,
    previousVolume: 50,
    volume: 50,
    songs: [],

    pause: () => {
      const audio = get().audio;
      if (audio) {
        audio.pause();
      }

      set({ audio, currently: "paused" });
    },

    resume: () => {
      const audio = get().audio;
      if (audio) {
        audio.play();
      }

      set({ audio, currently: "playing" });
    },

    play: async (listId) => {
      const { albums, playlists } = await getLists();
      const list = [...albums, ...playlists];

      let songs: Song[];
      if (listId !== get().listId) {
        songs = new Array<Song>();
        const item = list.find((item) => item.id === listId)!;
        songs.push(...item.songs);
      } else {
        songs = get().songs;
      }

      const songIndex = get().songIndex;
      const song = songs.at(songIndex)!;
      const src = `/${listId}/${song.id}.mp3`;
      let audio = get().audio;
      if (!audio) {
        audio = new Audio(src);
      } else {
        audio.src = src;
        audio.currentTime = 0;
      }
      audio.play();

      set({
        audio,
        listId,
        songs: songs,
        songId: song.id,
        currently: "playing",
      });
    },

    mute: () => {
      const { audio, volume } = get();
      if (audio) {
        audio.volume = 0;
      }

      set({ volume: 0, previousVolume: volume });
    },

    unmute: () => {
      const { audio, previousVolume } = get();
      if (audio) {
        audio.volume = previousVolume / 100;
      }

      set({ volume: previousVolume });
    },

    changeVolume: (volume) => {
      const audio = get().audio;
      if (audio) {
        audio.volume = volume / 100;
      }

      set({ volume });
    },

    next: () => {
      const { songs, songIndex, listId, play } = get();
      const song = songs.at(songIndex + 1);

      set({ songs, songIndex: songIndex + 1, songId: song?.id });

      if (song && listId) {
        play(listId);
      }
    },

    previous: () => {
      const { songs, songIndex, listId, play } = get();
      const song = songs.at(songIndex - 1);

      set({ songs, songIndex: songIndex - 1, songId: song?.id });

      if (song && listId) {
        play(listId);
      }
    },
  }),
);
