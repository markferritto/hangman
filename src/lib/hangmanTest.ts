import {
  HangmanGame,
  getIncorrectLetters,
  isGameLost,
  isGameWon,
  getGameStatus,
} from "./hangmanLogic";

function testHangmanGame() {
  const word = "react"; // Use a fixed word to make testing predictable

  const game: HangmanGame = {
    wordToGuess: word,
    guessedLetters: ["r", "e", "x", "o", "t", "q"],
    maxGuesses: 5,
  };

  console.log("Word to guess:", game.wordToGuess);
  console.log("Guessed letters:", game.guessedLetters);
  console.log("Incorrect letters:", getIncorrectLetters(game));
  console.log("Game won?", isGameWon(game));
  console.log("Game lost?", isGameLost(game));
  console.log("Game status:", getGameStatus(game));
}

testHangmanGame();
