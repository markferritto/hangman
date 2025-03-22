import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./store";
import { guessLetter, resetGame } from "./slices/gameSlice";
import "./App.css";
import {
  getIncorrectLetters,
  getGameStatus,
  GameStatus,
} from "./lib/hangmanLogic";
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";
import GameStatusDisplay from "./components/GameStatusDisplay";

function App() {
  const game = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  const gameStatus: GameStatus = getGameStatus(game);
  const incorrectLetters = getIncorrectLetters(game);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Hangman</h1>
      <WordDisplay
        word={game.wordToGuess}
        guessedLetters={game.guessedLetters}
      />
      <p>Incorrect guesses: {incorrectLetters.join(", ")}</p>
      <p>Status: {gameStatus.toUpperCase()}</p>
      <Keyboard
        guessedLetters={game.guessedLetters}
        onGuess={(letter) => dispatch(guessLetter(letter))}
      />
      <GameStatusDisplay status={gameStatus} onReset={resetGame} />
    </div>
  );
}

export default App;
