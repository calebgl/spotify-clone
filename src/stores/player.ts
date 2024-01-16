import { create } from "zustand";

export type PlayerState = {
  currently: "paused" | "playing";
  listId: string | null;
  songId: string | null;
  volume: number;
};

export type PlayerAction = {
  pause: () => void;
  resume: () => void;
  play: (songId: string, listId: string) => void;
};

export const usePlayerStore = create<PlayerState & PlayerAction>((set) => ({
  currently: "paused",
  listId: null,
  songId: null,
  volume: 50,
  pause: () => set(() => ({ currently: "paused" })),
  resume: () => set(() => ({ currently: "playing" })),
  play: (songId, listId) =>
    set(() => ({ songId, listId, currently: "playing" })),
}));
