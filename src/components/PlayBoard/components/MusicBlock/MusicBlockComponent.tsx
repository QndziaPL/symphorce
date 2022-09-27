import { FC, useContext, useEffect, useState } from "react";
import "./MusicBlock.css";
import {
  KeyboardContext,
  KeyboardKeys,
} from "../../../../contexts/KeyboardContext";

export interface MusicBlockComponentProps {
  index: number;
  playSounds: () => void;
  soundBlockDuration: number;
}

const labels = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
export const MusicBlockComponent: FC<MusicBlockComponentProps> = ({
  index,
  playSounds,
  soundBlockDuration,
}) => {
  const { keyboardKeysPressed } = useContext(KeyboardContext);
  console.log(keyboardKeysPressed);
  // const { play } = useContext(SoundContext);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (keyboardKeysPressed.includes(KeyboardKeys[index])) {
      // handleMakeActive(); //TODO: to wyjebuje
    }
  }, [keyboardKeysPressed]);

  const handleMakeActive = () => {
    setActive(true);
    playSounds();
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (active) {
      timeout = setTimeout(() => {
        setActive(() => false);
      }, soundBlockDuration);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [active]);

  return (
    <div
      className="musicBlock"
      onClick={handleMakeActive}
      style={{ backgroundColor: active ? "red" : undefined }}
    >
      {labels[index].toUpperCase()}
      {/*{block.id}*/}
    </div>
  );
};
