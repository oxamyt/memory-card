import "../../styles/Cards.css";
import { useEffect } from "react";

function GetImages({ cards, setCards, score, setScore }) {
  useEffect(() => {
    const pokemonNames = [
      "zekrom",
      "ho-oh",
      "lugia",
      "celebi",
      "rayquaza",
      "palkia",
      "mew",
      "mewtwo",
      "arceus",
      "pikachu",
      "charizard",
      "ceruledge",
    ];

    let i = 0;

    const fetchImages = async () => {
      const fetchedImages = await Promise.all(
        pokemonNames.map(async (name) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${name}`
          );
          if (!response.ok) {
            throw new Error("Bad response");
          }
          const data = await response.json();
          return {
            sprite: data.sprites.front_default,
            name: data.name,
            status: false,
            id: i++,
          };
        })
      );
      setCards(fetchedImages);
    };
    fetchImages();
  }, []);

  function handleClick(index) {
    const clickedArray = cards.filter((card) => card.id === index);
    const clicked = clickedArray[0];

    console.log(clicked);
    if (!clicked.status) {
      clicked.status = true;
      setCards([...cards]);
      setScore((prevScore) => {
        const newCurrentScore = prevScore.currentScore + 1;
        const newBestScore = Math.max(prevScore.bestScore, newCurrentScore);

        return {
          currentScore: newCurrentScore,
          bestScore: newBestScore,
        };
      });
    } else {
      const updatedArray = cards.map((card) => ({ ...card, status: false }));
      setCards(updatedArray);
      setScore({ ...score, currentScore: 0 });
    }
    shuffleCards(cards);
  }

  function shuffleCards(randomCards) {
    let currentIndex = cards.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [randomCards[currentIndex], randomCards[randomIndex]] = [
        randomCards[randomIndex],
        randomCards[currentIndex],
      ];
    }
    setCards(cards);
  }

  return (
    <main className="cards">
      {cards.map((img) => (
        <div
          className="pokemon-card"
          key={img.name}
          onClick={() => handleClick(img.id)}
        >
          <img className="pokemon-image" src={img.sprite} alt="pokemon"></img>
          <h1>{img.name}</h1>
        </div>
      ))}
    </main>
  );
}

export default GetImages;
