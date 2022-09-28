import React from "react";
import "./App.css";
import { FightScreen } from "./screens/FightScreen/FightScreen";
import { SoundContextProvider } from "./contexts/SoundContext";

const App = () => {
  return (
    <SoundContextProvider>
      <div className="App">
        <FightScreen />
      </div>
    </SoundContextProvider>
  );
};

export default App;
