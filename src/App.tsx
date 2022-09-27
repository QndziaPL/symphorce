import React from "react";
import "./App.css";
import { FightScreen } from "./screens/FightScreen/FightScreen";
import { SoundContextProvider } from "./contexts/SoundContext";
import { KeyboardContextProvider } from "./contexts/KeyboardContext";

const App = () => {
  return (
    <KeyboardContextProvider>
      <SoundContextProvider>
        <div className="App">
          <FightScreen />
        </div>
      </SoundContextProvider>
    </KeyboardContextProvider>
  );
};

export default App;
