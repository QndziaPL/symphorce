import { Composition } from "../components/PlayBoard/PlayBoard";

const composition1: Composition = {
  title: "Test shitty composition",
  id: 1,
  musicBlocks: [
    {
      id: 1,
      melody: [
        { note: "C4", duration: 0.1, time: 0 },
        { note: "E4", duration: 0.1, time: 0.1 },
        { note: "G4", duration: 0.1, time: 0.2 },
      ],
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
    },
    {
      id: 3,
      melody: [
        { note: "F4", duration: 0.1, time: 0 },
        { note: "G#4", duration: 0.1, time: 0.1 },
      ],
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
    },
  ],
};

const composition2: Composition = {
  title: "Marvelous masterpiece",
  id: 2,
  musicBlocks: [
    {
      id: 6,
      melody: [
        { note: "A#3", duration: 0.05, time: 0 },
        { note: "C#4", duration: 0.05, time: 0.05 },
        { note: "E4", duration: 0.05, time: 0.1 },
        { note: "G4", duration: 0.05, time: 0.15 },
        { note: "A#4", duration: 0.05, time: 0.2 },
        { note: "C#5", duration: 0.05, time: 0.25 },
      ],
    },
    {
      id: 6,
      melody: [
        { note: "B3", duration: 0.05, time: 0 },
        { note: "D4", duration: 0.05, time: 0.05 },
        { note: "F4", duration: 0.05, time: 0.1 },
        { note: "G#4", duration: 0.05, time: 0.15 },
        { note: "B4", duration: 0.05, time: 0.2 },
        { note: "D5", duration: 0.05, time: 0.25 },
      ],
    },
    {
      id: 6,
      melody: [
        { note: "C4", duration: 0.05, time: 0 },
        { note: "D#4", duration: 0.05, time: 0.05 },
        { note: "F#4", duration: 0.05, time: 0.1 },
        { note: "A4", duration: 0.05, time: 0.15 },
        { note: "C5", duration: 0.05, time: 0.2 },
        { note: "D#5", duration: 0.05, time: 0.25 },
      ],
    },
    {
      id: 6,
      melody: [
        { note: "E5", duration: 0.05, time: 0 },
        { note: "E6", duration: 0.05, time: 0.05 },
        { note: "D#6", duration: 0.05, time: 0.1 },
        { note: "D6", duration: 0.05, time: 0.15 },
        { note: "C#6", duration: 0.05, time: 0.2 },
        { note: "C6", duration: 0.05, time: 0.25 },
        { note: "B5", duration: 0.05, time: 0.3 },
        { note: "A#5", duration: 0.05, time: 0.35 },
        { note: "A5", duration: 0.05, time: 0.4 },
        { note: "G#5", duration: 0.05, time: 0.45 },
        { note: "G5", duration: 0.05, time: 0.5 },
        { note: "F#5", duration: 0.05, time: 0.55 },
        { note: "F5", duration: 0.05, time: 0.6 },
        { note: "E5", duration: 0.05, time: 0.65 },
        { note: "D#5", duration: 0.05, time: 0.7 },
        { note: "D5", duration: 0.05, time: 0.75 },
        { note: "C#5", duration: 0.05, time: 0.8 },
        { note: "C5", duration: 0.05, time: 0.85 },
      ],
    },
  ],
};

const composition3: Composition = {
  title: "Kurwy trzy",
  id: 3,
  musicBlocks: [
    {
      id: 1,
      melody: [
        { note: "D4", duration: 0.25, time: 0 },
        { note: "D4", duration: 0.25, time: 0.5 },
      ],
    },
    {
      id: 2,
      melody: [
        { note: "E4", duration: 0.25, time: 0 },
        { note: "E4", duration: 0.25, time: 0.5 },
      ],
    },
    {
      id: 3,
      melody: [
        { note: "F#4", duration: 0.25, time: 0 },
        { note: "F#4", duration: 0.25, time: 0.5 },
      ],
    },
    {
      id: 4,
      melody: [
        { note: "G4", duration: 0.25, time: 0 },
        { note: "G4", duration: 0.25, time: 0.5 },
      ],
    },
    {
      id: 5,
      melody: [
        { note: "A4", duration: 0.25, time: 0 },
        { note: "A4", duration: 0.25, time: 0.5 },
      ],
    },
    {
      id: 6,
      melody: [
        { note: "B4", duration: 0.25, time: 0 },
        { note: "B4", duration: 0.25, time: 0.5 },
      ],
    },
  ],
};

const compositions = [composition1, composition2, composition3];

export default compositions;
