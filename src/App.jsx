import Header from "./Components/Header";
import Quiz from "./Components/Quiz";
import { useState } from "react";
function App() {
  const [displayItem, setDisplayItem] = useState(
    <>
      <h2 id="Instruct">Start The Quiz</h2>
      <div id="start-btn">
        <button onClick={HandleStart}>Start</button>
      </div>
    </>
  );

  function HandleStart() {
    setDisplayItem(<Quiz />);
  }
  return (
    <>
      <Header />
      {displayItem}
    </>
  );
}

export default App;
