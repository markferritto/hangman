# Hangman Game Architecture

## 🧠 App Concept: Hangman
Guess the hidden word by suggesting letters. You have a limited number of incorrect guesses before the game ends.

## 🧱 Component Breakdown

| Component | Responsibility |
|-----------|----------------|
| App.tsx | Root app logic, routing (if needed), layout |
| WordDisplay.tsx | Shows the partially guessed word |
| Keyboard.tsx | Interactive letter buttons |
| GameStatus.tsx | Shows win/loss messages and reset button |

## 📦 State Management

### Redux Implementation
| File | Purpose |
|------|---------|
| store.ts | Configures Redux store and exports type definitions |
| gameSlice.ts | Defines game state, actions, and reducers |
| main.tsx | Sets up Redux Provider to make store available to components |

### Core State
| State Variable | Type | Purpose |
|----------------|------|---------|
| wordToGuess | string | The secret word the user is trying to guess |
| guessedLetters | string[] | Letters the user has guessed so far |
| maxGuesses | number | Limit before game over |

## 🛠️ Utility Logic

| File | Purpose |
|------|---------|
| hangmanLogic.ts | Core game functions (getGameStatus, isGameWon, etc.) and types |
| generateWord.ts | Random word generation for gameplay |
| hangmanTest.ts | Test utilities for game logic |

## 🔄 Game Flow

1. App initializes with a random word and empty guessed letters
2. Player clicks letters on the Keyboard component
3. WordDisplay updates to show correctly guessed letters
4. Game tracks incorrect guesses against maxGuesses limit
5. GameStatusDisplay shows win/loss message when game ends
6. Player can reset the game to start over