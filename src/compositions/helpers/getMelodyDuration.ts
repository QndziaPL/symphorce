import {
  Melody,
  TriggerAttackReleaseProps,
} from "../../components/PlayBoard/PlayBoard";

export const getMelodyDuration = (melody: Melody): number => {
  const lastNote = [...melody].pop() as TriggerAttackReleaseProps;
  return (lastNote.time + lastNote.duration) * 1000;
};
