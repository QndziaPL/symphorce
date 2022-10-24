import { FC } from "react";
import "./MusicBlock.css";
import { LoadingBar } from "../../../shared/LoadingBar/LoadingBar";

export interface MusicBlockComponentProps {
  index: number;
  playSounds: () => void;
  active: boolean;
  duration: number;
}

const labels = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
export const MusicBlockComponent: FC<MusicBlockComponentProps> = ({
  index,
  playSounds,
  active,
  duration,
}) => {
  return (
    <div
      className="musicBlock"
      onClick={playSounds}
      style={{ backgroundColor: active ? "red" : undefined }}
    >
      {labels[index].toUpperCase()}
      <LoadingBar animationTime={duration} active={active} />
    </div>
  );
};
