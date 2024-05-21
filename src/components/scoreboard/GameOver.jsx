import "../../styles/GameOver.css";

function GameOver({ display, setDisplay, score, setScore }) {
  function handleRestart() {
    setDisplay(false);
    setScore({ ...score, currentScore: 0 });
  }
  return (
    display && (
      <>
        <div className="overlay"></div>
        <div className="game-over">
          <h1>Game over</h1>
          <h2>Your score: {score.currentScore}/12</h2>
          <button className="restart" type="button" onClick={handleRestart}>
            Try Again
          </button>
        </div>
      </>
    )
  );
}

export default GameOver;
