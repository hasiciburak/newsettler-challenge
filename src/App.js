import "./App.scss";
import StayUpdated from "./components/StayUpdated";
import ThankYou from "./components/ThankYou";
import { useState } from "react";

function App() {
  const [mailSubmitted, setMailSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      {mailSubmitted ? (
        <ThankYou setMailSubmitted={setMailSubmitted} email={email} />
      ) : (
        <StayUpdated
          setMailSubmitted={setMailSubmitted}
          email={email}
          setEmail={setEmail}
        />
      )}
    </div>
  );
}

export default App;
