import { FC } from "react";

import "./CompositionChanger.css";
import { Button } from "../../../shared/Button/Button";

interface CompositionChangerProps {
  nextComposition: () => void;
  previousComposition: () => void;
  currentTitle: string;
}
export const CompositionChanger: FC<CompositionChangerProps> = ({
  previousComposition,
  nextComposition,
  currentTitle,
}) => {
  return (
    <div className="compositionChanger">
      <div className="compositionChangerContent">
        <Button onClick={previousComposition}>
          <div className="arrow arrow-left" />
        </Button>
        <div className="currentCompositionTitle">
          {currentTitle.toUpperCase()}
        </div>
        <Button onClick={nextComposition}>
          <div className="arrow arrow-right" />
        </Button>
      </div>
    </div>
  );
};
