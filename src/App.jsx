import "./styles/normalize.css";
import "./styles/App.css";
import GetImages from "./components/cards/Cards";
import Scoreboard from "./components/scoreboard/Scoreboard";
import GameOver from "./components/scoreboard/GameOver";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState({ currentScore: 0, bestScore: 0 });
  const [display, setDisplay] = useState(false);

  return (
    <div className="container">
      <Scoreboard score={score}></Scoreboard>
      <GameOver
        display={display}
        setDisplay={setDisplay}
        score={score}
        setScore={setScore}
      ></GameOver>
      <GetImages
        cards={cards}
        setCards={setCards}
        score={score}
        setScore={setScore}
        setDisplay={setDisplay}
      ></GetImages>
    </div>
  );
}

export default App;
