import { Composition } from "../components/PlayBoard/PlayBoard";

const composition1: Composition = {
  id: 1,
  musicBlocks: [
    {
      id: 1,
      melody: [
        { note: "C4", duration: "16n", time: 0 },
        { note: "E4", duration: "16n", time: 0.1 },
        { note: "G4", duration: "16n", time: 0.2 },
      ],
      duration: 300,
    },
    {
      id: 2,
      melody: [
        { note: "D4", duration: "16n", time: 0 },
        { note: "E4", duration: "16n", time: 0.1 },
        { note: "F4", duration: "16n", time: 0.2 },
        { note: "G4", duration: "16n", time: 0.3 },
        { note: "A4", duration: "16n", time: 0.4 },
      ],
      duration: 500,
    },
    {
      id: 3,
      melody: [
        { note: "F4", duration: "16n", time: 0 },
        { note: "G#4", duration: "16n", time: 0.1 },
      ],
      duration: 200,
    },
    {
      id: 4,
      melody: [
        { note: "G4", duration: "16n", time: 0 },
        { note: "F#4", duration: "16n", time: 0.1 },
        { note: "G4", duration: "16n", time: 0.2 },
        { note: "D5", duration: "16n", time: 0.3 },
        { note: "D4", duration: "16n", time: 0.4 },
        { note: "F4", duration: "16n", time: 0.5 },
        { note: "B4", duration: "16n", time: 0.6 },
      ],
      duration: 700,
    },
  ],
};

export { composition1 };
