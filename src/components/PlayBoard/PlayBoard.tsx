import { FC, useCallback, useEffect, useState } from "react";
import "./PlayBoard.css";
import { MusicBlockComponent } from "./components/MusicBlock/MusicBlockComponent";
import * as Tone from "tone";

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

export const KeyboardKeys = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
export enum BaseNotes {
  C4,
  D4,
  E4,
  F4,
  G4,
  A4,
  B4,
  C5,
  D5,
  E5,
  F5,
  G5,
}

export interface TriggerAttackReleaseProps {
  note: Tone.Unit.Frequency;
  duration: Tone.Unit.Time;
  time?: Tone.Unit.Time;
}

export type Melody = Array<TriggerAttackReleaseProps>;
const synth = new Tone.Synth().toDestination();
export const PlayBoard: FC<PlayBoardProps> = ({ musicBlocks }) => {
  const playTest = (index: number, melody?: Melody) => {
    const now = Tone.now();
    if (!melody) {
      // const baseMelody: Melody = [
      //     {note: BaseNotes.C4}
      // ]
      synth.triggerAttackRelease(BaseNotes[index] ?? 0, "16n", now);
      synth.triggerAttackRelease(BaseNotes[index + 1] ?? 0, "16n", now + 0.1);
      synth.triggerAttackRelease(BaseNotes[index + 2] ?? 0, "16n", now + 0.2);
    }
  };

  const [activeKeys, setActiveKeys] = useState<number[]>([]);

  const [keyboardKeysPressed, setKeyboardKeysPressed] = useState<string[]>([]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    setKeyboardKeysPressed((prev) =>
      prev.includes(event.key) ? prev : [...prev, event.key]
    );
  }, []);
  const handleKeyUp = useCallback((event: KeyboardEvent) => {
    setKeyboardKeysPressed((prev) => {
      const copy = [...prev];
      copy.splice(prev.indexOf(event.key), 1);
      return copy;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (
      keyboardKeysPressed.length &&
      keyboardKeysPressed.filter((key) => KeyboardKeys.includes(key)).length
    ) {
      keyboardKeysPressed.forEach((key) => {
        playSingleBlock(KeyboardKeys.indexOf(key), 500);
      });
    }
  }, [keyboardKeysPressed]);

  const playSingleBlock = useCallback(
    (index: number, soundBlockDuration: number) => {
      playTest(index);
      setActiveKeys((prev) => [...prev, index]);

      setTimeout(() => {
        setActiveKeys((prev) => {
          const copy = [...prev];
          copy.splice(copy.indexOf(index), 1);
          return copy;
        });
      }, soundBlockDuration);
    },
    []
  );

  return (
    <div
      className="playBoard"
      style={{ gridTemplateColumns: `repeat( ${musicBlocks.length / 2}, 1fr)` }}
    >
      {musicBlocks.map((block, index) => (
        <MusicBlockComponent
          duration={500}
          key={index}
          index={index}
          active={activeKeys.includes(index)}
          playSounds={() => playSingleBlock(index, 500)}
        />
      ))}
    </div>
  );
};
