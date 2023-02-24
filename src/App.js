import React, { useState } from "react";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  const [ack, setack] = useState(true);

  const change = () => {
    setack(!ack);
  };

  return (
    <>
      {ack ? <Home /> : <About />}
      <button onClick={change}>change</button>
    </>
  );
}

export default App;