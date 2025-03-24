/**
 * Domain model for the Hangman game.
 * Using an enum for GameStatus demonstrates type safety and domain modeling principles
 * similar to those used in Domain-Driven Design (DDD).
 */
export enum GameStatus {
  PLAYING = "playing",
  WON = "won",
  LOST = "lost",
}

/**
 * Core domain entity representing the game state.
 * Following DDD principles by encapsulating related properties in a cohesive entity.
 */
export interface HangmanGame {
  wordToGuess: string;
  guessedLetters: string[];
  maxGuesses: number;
}

/**
 * Pure function implementation for game logic.
 * This functional approach ensures:
 * 1. Testability - functions can be tested in isolation
 * 2. Maintainability - single responsibility principle
 * 3. Predictability - no side effects
 */

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
