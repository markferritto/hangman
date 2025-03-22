export enum GameStatus {
  PLAYING = "playing",
  WON = "won",
  LOST = "lost",
}
export interface HangmanGame {
  wordToGuess: string;
  guessedLetters: string[];
  maxGuesses: number;
}

/**
 * Checks which letters are incorrect.
 */
export function getIncorrectLetters(game: HangmanGame): string[] {
  return game.guessedLetters.filter(
    (letter) => !game.wordToGuess.includes(letter)
  );
}

/**
 * Determines if the player has lost.
 */
export function isGameLost(game: HangmanGame): boolean {
  return getIncorrectLetters(game).length >= game.maxGuesses;
}

/**
 * Determines if the player has won.
 */
export function isGameWon(game: HangmanGame): boolean {
  return game.wordToGuess
    .split("")
    .every((letter) => game.guessedLetters.includes(letter));
}

/**
 * Returns the current game status.
 */
export function getGameStatus(game: HangmanGame): GameStatus {
  if (isGameWon(game)) return GameStatus.WON;
  if (isGameLost(game)) return GameStatus.LOST;
  return GameStatus.PLAYING;
}
