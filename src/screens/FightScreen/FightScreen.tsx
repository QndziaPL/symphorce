import {
  EvenLengthMusicBlockArray,
  PlayBoard,
} from "../../components/PlayBoard/PlayBoard";
import { ScreenWrapper } from "../ScreenWrapper/ScreenWrapper";
import { composition1 } from "../../compositions/testCompositions";

export const FightScreen = () => {
  return (
    <ScreenWrapper>
      <PlayBoard composition={composition1} />
    </ScreenWrapper>
  );
};
