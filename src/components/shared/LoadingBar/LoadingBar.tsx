import { FC } from "react";
import "./LoadingBar.css";

export interface LoadingBarProps {
  animationTime: number;
  barColor?: string;
  backgroundColor?: string;
  height?: number;
}

export const LoadingBar: FC<LoadingBarProps> = ({
  animationTime,
  barColor,
  backgroundColor,
  height,
}) => {
  return (
    <div className="loadingBar" style={{ backgroundColor, height }}>
      <div
        className="loadingBarExpandingBar"
        style={{
          animationDuration: `${animationTime}ms`,
          backgroundColor: barColor,
        }}
      />
    </div>
  );
};
