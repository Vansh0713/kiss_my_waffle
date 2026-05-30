import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import MainWebsite from "./components/MainWebsite";

function App() {
  const [entered, setEntered] = useState(false);

  return entered ? (
    <MainWebsite />
  ) : (
    <WelcomeScreen onEnter={() => setEntered(true)} />
  );
}

export default App;