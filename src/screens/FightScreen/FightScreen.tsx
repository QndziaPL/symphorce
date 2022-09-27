import {
  EvenLengthMusicBlockArray,
  PlayBoard,
} from "../../components/PlayBoard/PlayBoard";

const mockMusicBlocks: EvenLengthMusicBlockArray = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];
export const FightScreen = () => {
  return (
    <div>
      <PlayBoard musicBlocks={mockMusicBlocks} />
    </div>
  );
};
