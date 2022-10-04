import { Composition, PlayBoard } from "../../components/PlayBoard/PlayBoard";
import { ScreenWrapper } from "../ScreenWrapper/ScreenWrapper";
import testCompositions from "../../compositions/testCompositions";
import { useMemo, useState } from "react";
import { CompositionChanger } from "../../components/PlayBoard/components/CompositionChanger/CompositionChanger";

const availableCompositions: Composition[] = testCompositions;
// TODO: in the future will be taken from store or context or elsewhere
// TODO: also dont forget adding availableComposition later to useMemo deps

export const FightScreen = () => {
  const [currentCompositionIndex, setCurrentCompositionIndex] =
    useState<number>(0);

  const nextComposition = () => {
    setCurrentCompositionIndex((prev) =>
      prev + 1 > availableCompositions.length - 1 ? 0 : prev + 1
    );
  };

  const previousComposition = () => {
    setCurrentCompositionIndex((prev) =>
      prev - 1 < 0 ? availableCompositions.length - 1 : prev - 1
    );
  };

  const composition = useMemo(
    () => availableCompositions[currentCompositionIndex],
    [currentCompositionIndex]
  );

  return (
    <ScreenWrapper>
      <CompositionChanger
        nextComposition={nextComposition}
        previousComposition={previousComposition}
        currentTitle={composition.title}
      />
      {composition && <PlayBoard composition={composition} />}
    </ScreenWrapper>
  );
};
