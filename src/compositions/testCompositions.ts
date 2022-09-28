import { Composition } from "../components/PlayBoard/PlayBoard";

const composition1: Composition = {
  id: 1,
  musicBlocks: [
    {
      id: 1,
      melody: [
        { note: "C4", duration: 0.1, time: 0 },
        { note: "E4", duration: 0.1, time: 0.1 },
        { note: "G4", duration: 0.1, time: 0.2 },
      ],
      duration: 300,
    },
    {
      id: 2,
      melody: [
        { note: "D4", duration: 0.1, time: 0 },
        { note: "E4", duration: 0.1, time: 0.1 },
        { note: "F4", duration: 0.1, time: 0.2 },
        { note: "G4", duration: 0.1, time: 0.3 },
        { note: "A4", duration: 0.1, time: 0.4 },
      ],
      duration: 500,
    },
    {
      id: 3,
      melody: [
        { note: "F4", duration: 0.1, time: 0 },
        { note: "G#4", duration: 0.1, time: 0.1 },
      ],
      duration: 200,
    },
    {
      id: 4,
      melody: [
        { note: "G4", duration: 0.1, time: 0 },
        { note: "F#4", duration: 0.1, time: 0.1 },
        { note: "G4", duration: 0.1, time: 0.2 },
        { note: "D5", duration: 0.1, time: 0.3 },
        { note: "D4", duration: 0.1, time: 0.4 },
        { note: "F4", duration: 0.1, time: 0.5 },
        { note: "B4", duration: 0.1, time: 0.6 },
      ],
      duration: 700,
    },
    {
      id: 5,
      melody: [
        { note: "C4", duration: 0.1, time: 0 },
        { note: "D#4", duration: 0.1, time: 0.1 },
        { note: "G#4", duration: 0.1, time: 0.2 },
        { note: "C5", duration: 0.1, time: 0.3 },
        { note: "D#4", duration: 0.1, time: 0.4 },
        { note: "G4", duration: 0.1, time: 0.5 },
        { note: "G#4", duration: 0.1, time: 0.6 },
        { note: "B4", duration: 0.1, time: 0.7 },
        { note: "C5", duration: 0.1, time: 0.8 },
        { note: "G#4", duration: 0.1, time: 0.9 },
      ],
      duration: 1000,
    },
    {
      id: 6,
      melody: [
        { note: "A#3", duration: 0.05, time: 0 },
        { note: "D4", duration: 0.05, time: 0.05 },
        { note: "F4", duration: 0.05, time: 0.1 },
        { note: "A#4", duration: 0.05, time: 0.15 },
        { note: "D5", duration: 0.05, time: 0.2 },
        { note: "F5", duration: 0.05, time: 0.25 },
      ],
      duration: 300,
    },
  ],
};

export { composition1 };
