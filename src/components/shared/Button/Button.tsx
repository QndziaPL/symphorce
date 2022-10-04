import "./Button.css";
import { FC, PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
}
export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <div className="button" onClick={onClick}>
      {children}
    </div>
  );
};
