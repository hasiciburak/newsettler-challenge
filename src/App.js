import "./App.scss";
import StayUpdated from "./components/StayUpdated";
import ThankYou from "./components/ThankYou";
import { useState } from "react";

function App() {
  const [mailSubmitted, setMailSubmitted] = useState(false);
  return (
    <div className="App">
      {mailSubmitted ? (
        <ThankYou setMailSubmitted={setMailSubmitted} />
      ) : (
        <StayUpdated setMailSubmitted={setMailSubmitted} />
      )}
    </div>
  );
}

export default App;
