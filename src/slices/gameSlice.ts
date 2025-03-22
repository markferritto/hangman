import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRandomWord } from "../lib/generateWord";
import { getGameStatus } from "../lib/hangmanLogic";

interface GameState {
  wordToGuess: string;
  guessedLetters: string[];
  maxGuesses: number;
}

const initialState: GameState = {
  wordToGuess: getRandomWord(),
  guessedLetters: [],
  maxGuesses: 6,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    guessLetter(state, action: PayloadAction<string>) {
      const letter = action.payload;
      const alreadyGuessed = state.guessedLetters.includes(letter);
      const gameOver = getGameStatus(state) !== "playing";

      if (!alreadyGuessed && !gameOver) {
        state.guessedLetters.push(letter);
      }
    },
    resetGame(state) {
      state.wordToGuess = getRandomWord();
      state.guessedLetters = [];
    },
  },
});

export const { guessLetter, resetGame } = gameSlice.actions;
export default gameSlice.reducer;