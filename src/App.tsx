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

/**
 * Container component that orchestrates the application.
 * This demonstrates:
 * 1. Component composition (assembling smaller components)
 * 2. State management integration
 * 3. Event handling and propagation
 * 
 * In a microservices context, this would be similar to an API gateway
 * that coordinates between different services and presents a unified interface.
 */

function App() {
  /**
   * useSelector hook connects to Redux store and extracts the game state.
   * This creates a subscription - the component will re-render when this state changes.
   *
   * Similar to how a microservice might subscribe to events from another service.
   */
  const game = useSelector((state: RootState) => state.game);

  /**
   * useDispatch hook provides a way to dispatch actions to the Redux store.
   * This is how components request state changes.
   *
   * Similar to how a microservice might send commands or events to other services.
   */
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

      {/* 
        Keyboard component receives:
        - State data via props (guessedLetters)
        - A callback that dispatches an action to Redux (onGuess)
        
        This pattern separates UI components from state management,
        making them reusable and testable.
      */}
      <Keyboard
        guessedLetters={game.guessedLetters}
        onGuess={(letter) => dispatch(guessLetter(letter))}
      />

      <GameStatusDisplay status={gameStatus} onReset={() => dispatch(resetGame())} />
    </div>
  );
}

export default App;
