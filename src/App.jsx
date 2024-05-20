import "./styles/normalize.css";
import "./styles/App.css";
import GetImages from "./components/cards/Cards";
import Scoreboard from "./components/scoreboard/Scoreboard";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState({ currentScore: 0, bestScore: 0 });

  return (
    <div className="container">
      <Scoreboard score={score}></Scoreboard>
      <GetImages
        cards={cards}
        setCards={setCards}
        score={score}
        setScore={setScore}
      ></GetImages>
    </div>
  );
}

export default App;
