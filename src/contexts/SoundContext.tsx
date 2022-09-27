import { createContext, FC, PropsWithChildren } from "react";

interface SoundContextInterface {
  play: (dupa: any) => void;
}

const SoundContext = createContext<SoundContextInterface>(
  {} as SoundContextInterface
);

const SoundContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const play = () => {};
  return (
    <SoundContext.Provider
      value={{
        play,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export { SoundContext, SoundContextProvider };
