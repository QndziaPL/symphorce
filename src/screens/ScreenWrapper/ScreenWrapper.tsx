import { FC, PropsWithChildren } from "react";

import "./ScreenWrapper.css";

export const ScreenWrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className="screenWrapper">{children}</div>
);
