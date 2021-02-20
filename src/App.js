import React, { useState } from "react";
import "./App.css";
import CircleSelector from "./components/CircleSelector/CircleSelector";
import Circle from "./components/Circle/Circle";

function App() {
  const [b1, setB1Toggle] = useState(true);
  const [b2, setB2Toggle] = useState(false);
  const [b3, setB3Toggle] = useState(false);
  const [b4, setB4Toggle] = useState(false);

  return (
    <div className="App">
      <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
      <main>
        <CircleSelector
          b1={b1}
          setB1Toggle={setB1Toggle}
          b2={b2}
          setB2Toggle={setB2Toggle}
          b3={b3}
          setB3Toggle={setB3Toggle}
          b4={b4}
          setB4Toggle={setB4Toggle}
        />
        <Circle b1={b1} b2={b2} b3={b3} b4={b4} />
      </main>
    </div>
  );
}

export default App;
