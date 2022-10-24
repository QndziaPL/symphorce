import { FC } from "react";
import "./LoadingBar.css";

export interface LoadingBarProps {
  animationTime: number;
  barColor?: string;
  backgroundColor?: string;
  height?: number;
  active: boolean;
}

export const LoadingBar: FC<LoadingBarProps> = ({
  animationTime,
  barColor,
  backgroundColor,
  height,
  active,
}) => {
  return (
    <div className="loadingBar" style={{ backgroundColor, height }}>
      {active && (
        <div
          className="loadingBarExpandingBar"
          style={{
            animationDuration: `${animationTime}ms`,
            backgroundColor: barColor,
          }}
        />
      )}
    </div>
  );
};
