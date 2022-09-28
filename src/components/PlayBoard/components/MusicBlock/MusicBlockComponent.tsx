import { FC } from "react";
import "./MusicBlock.css";

export interface MusicBlockComponentProps {
  index: number;
  playSounds: () => void;
  active: boolean;
}

const labels = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
export const MusicBlockComponent: FC<MusicBlockComponentProps> = ({
  index,
  playSounds,
  active,
}) => {
  return (
    <div
      className="musicBlock"
      onClick={playSounds}
      style={{ backgroundColor: active ? "red" : undefined }}
    >
      {labels[index].toUpperCase()}
      {/*{block.id}*/}
    </div>
  );
};
