import "../../styles/Scoreboard.css";

function Scoreboard({ score }) {
  return (
    <section className="scoreboard">
      <h1>Best score: {score.bestScore}</h1>
      <h1>Current score: {score.currentScore}</h1>
    </section>
  );
}

export default Scoreboard;
