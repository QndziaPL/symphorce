import { FC, useContext, useEffect, useMemo, useState } from "react";
import "./PlayBoard.css";
import { MusicBlockComponent } from "./components/MusicBlock/MusicBlockComponent";
import * as Tone from "tone";
import { KeyboardContext, KeyboardKeys } from "../../contexts/KeyboardContext";

export interface MusicBlock {
  id: number;
}

export type EvenLengthMusicBlockArray =
  | [MusicBlock, MusicBlock, MusicBlock, MusicBlock]
  | [MusicBlock, MusicBlock, MusicBlock, MusicBlock, MusicBlock, MusicBlock]
  | [
      MusicBlock,
      MusicBlock,
      MusicBlock,
      MusicBlock,
      MusicBlock,
      MusicBlock,
      MusicBlock,
      MusicBlock
    ]
  | [
      MusicBlock,
      MusicBlock,
      MusicBlock,
      MusicBlock,
      MusicBlock,
      MusicBlock,
      MusicBlock,
      MusicBlock,
      MusicBlock,
      MusicBlock
    ];

interface PlayBoardProps {
  // melody: any
  musicBlocks: EvenLengthMusicBlockArray;
}

export const PlayBoard: FC<PlayBoardProps> = ({ musicBlocks }) => {
  const synth = new Tone.Synth().toDestination();
  const playTest = (id: number) => synth.triggerAttackRelease(id * 111, "4n");

  return (
    <div
      className="playBoard"
      style={{ gridTemplateColumns: `repeat( ${musicBlocks.length / 2}, 1fr)` }}
    >
      {musicBlocks.map((block, index) => (
        <MusicBlockComponent
          soundBlockDuration={2000}
          index={index}
          playSounds={() => playTest(index + 1)}
        />
      ))}
    </div>
  );
};
