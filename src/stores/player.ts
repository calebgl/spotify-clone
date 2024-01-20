import { create } from "zustand";

export type PlayerState = {
  currently: "paused" | "playing";
  listId: string | null;
  songId: string | null;
  volume: number;
  previousVolume: number;
};

export type PlayerAction = {
  pause: () => void;
  resume: () => void;
  play: (songId: string, listId: string) => void;
  mute: () => void;
  unmute: () => void;
  changeVolume: (volume: number) => void;
};

export const usePlayerStore = create<PlayerState & PlayerAction>((set) => ({
  currently: "paused",
  listId: null,
  songId: null,
  previousVolume: 50,
  volume: 50,
  pause: () => set(() => ({ currently: "paused" })),
  resume: () => set(() => ({ currently: "playing" })),
  play: (songId, listId) =>
    set(() => ({ songId, listId, currently: "playing" })),
  mute: () => set((state) => ({ volume: 0, previousVolume: state.volume })),
  unmute: () => set((state) => ({ volume: state.previousVolume })),
  changeVolume: (volume) => set(() => ({ volume })),
}));
