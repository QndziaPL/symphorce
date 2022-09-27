import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

export const KeyboardKeys = [
  "q",
  "y",
  "w",
  "u",
  "e",
  "i",
  "r",
  "t",
  "o",
  "p",
] as const;

type KeyboardKeysPressedType = Array<typeof KeyboardKeys[number]>;

interface KeyboardContextInterface {
  keyboardKeysPressed: KeyboardKeysPressedType;
}

const KeyboardContext = createContext<KeyboardContextInterface>(
  {} as KeyboardContextInterface
);

const KeyboardContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [keyboardKeysPressed, setKeyboardKeysPressed] =
    useState<KeyboardKeysPressedType>([]);

  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key as KeyboardKeysPressedType[number];
    if (KeyboardKeys.includes(key)) {
      setKeyboardKeysPressed((prev) =>
        prev.includes(key) ? prev : [...prev, key]
      );
    }
  };
  const handleKeyUp = (event: KeyboardEvent) => {
    const key = event.key as KeyboardKeysPressedType[number];
    if (KeyboardKeys.includes(key)) {
      setKeyboardKeysPressed((prev) => {
        const copy = [...prev];
        prev.splice(prev.indexOf(key), 1);
        return copy;
      });
    }
  };

  useEffect(() => {
    console.log("dupa");
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <KeyboardContext.Provider value={{ keyboardKeysPressed }}>
      {children}
    </KeyboardContext.Provider>
  );
};

export { KeyboardContext, KeyboardContextProvider };
