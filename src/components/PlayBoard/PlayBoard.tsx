import { FC, useCallback, useEffect, useState } from "react";
import "./PlayBoard.css";
import { MusicBlockComponent } from "./components/MusicBlock/MusicBlockComponent";
import * as Tone from "tone";
import { getMelodyDuration } from "../../compositions/helpers/getMelodyDuration";

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

export interface MusicBlock {
  id: number;
  melody: Melody;
}

export interface Composition {
  title: string;
  musicBlocks: EvenLengthMusicBlockArray;
  id: number;
}

interface PlayBoardProps {
  composition: Composition;
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
  duration: number;
  time: number;
}

export type Melody = Array<TriggerAttackReleaseProps>;

const synth = new Tone.Synth().toDestination();

export const PlayBoard: FC<PlayBoardProps> = ({ composition }) => {
  const playMelody = (melody?: Melody) => {
    if (!melody) return;
    const now = Tone.now();
    melody.forEach(({ duration, note, time }) => {
      synth.triggerAttackRelease(note, duration, now + time);
    });
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
  }, [handleKeyDown, handleKeyUp]);

  const playSingleBlock = useCallback(
    (index: number) => {
      //TODO: docelowo zamienić indexy na ID danych przycisków
      const melody = composition.musicBlocks[index]?.melody;
      const duration = getMelodyDuration(melody);
      playMelody(melody);
      setActiveKeys((prev) => [...prev, index]);

      setTimeout(() => {
        setActiveKeys((prev) => {
          const copy = [...prev];
          copy.splice(copy.indexOf(index), 1);
          return copy;
        });
      }, duration);
    },
    [composition]
  );

  useEffect(() => {
    if (
      keyboardKeysPressed.length &&
      keyboardKeysPressed.filter((key) => KeyboardKeys.includes(key)).length
    ) {
      keyboardKeysPressed.forEach((key) => {
        playSingleBlock(KeyboardKeys.indexOf(key));
      });
    }
  }, [keyboardKeysPressed, playSingleBlock]);

  return (
    <div
      className="playBoard"
      style={{
        gridTemplateColumns: `repeat( ${
          composition.musicBlocks.length / 2
        }, 1fr)`,
      }}
    >
      {composition.musicBlocks.map((block, index) => {
        const duration = getMelodyDuration(block.melody);
        return (
          <MusicBlockComponent
            duration={duration}
            key={index}
            index={index}
            active={activeKeys.includes(index)}
            playSounds={() => playSingleBlock(index)}
          />
        );
      })}
    </div>
  );
};
