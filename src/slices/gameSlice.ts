import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRandomWord } from "../lib/generateWord";
import { getGameStatus } from "../lib/hangmanLogic";

/**
 * Game state interface - defines the shape of this slice of Redux state.
 * This follows domain-driven design principles by modeling the core
 * entities and their properties.
 */
interface GameState {
  wordToGuess: string;
  guessedLetters: string[];
  maxGuesses: number;
}

/**
 * Initial state for the game slice.
 * Redux requires a defined initial state to start with.
 */
const initialState: GameState = {
  wordToGuess: getRandomWord(),
  guessedLetters: [],
  maxGuesses: 6,
};

/**
 * A Redux "slice" combines state, actions, and reducers in one file.
 * 
 * This pattern:
 * 1. Encapsulates all related logic for a feature (similar to a microservice)
 * 2. Implements event-driven design through actions and reducers
 * 3. Provides a clear API for state changes
 * 
 * Each reducer function handles a specific action (event) and updates
 * state accordingly, similar to event handlers in enterprise systems.
 */
const gameSlice = createSlice({
  name: "game", // Namespace for this slice
  initialState,
  reducers: {
    /**
     * Handles a letter guess action.
     * This is triggered when a player clicks a letter on the keyboard.
     *
     * @param state - Current game state (automatically provided by Redux)
     * @param action - Contains the letter being guessed
     */
    guessLetter(state, action: PayloadAction<string>) {
      const letter = action.payload;
      const alreadyGuessed = state.guessedLetters.includes(letter);
      const gameOver = getGameStatus(state) !== "playing";

      // Only update state if the letter hasn't been guessed and game is active
      if (!alreadyGuessed && !gameOver) {
        state.guessedLetters.push(letter);
      }
    },

    /**
     * Resets the game to initial state with a new word.
     * This is triggered when a player clicks "Play Again".
     *
     * @param state - Current game state (automatically provided by Redux)
     */
    resetGame(state) {
      state.wordToGuess = getRandomWord();
      state.guessedLetters = [];
    },
  },
});

/**
 * Export action creators for components to dispatch.
 * These functions create standardized action objects that the reducers respond to.
 * 
 * Components will import these and use them with dispatch() to request state changes.
 */
export const { guessLetter, resetGame } = gameSlice.actions;

/**
 * Export the reducer function for the store to use.
 * This is registered in store.ts and handles all actions for this slice.
 */
export default gameSlice.reducer;