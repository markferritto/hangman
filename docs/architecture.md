🧠 App Concept: Hangman
Guess the hidden word by suggesting letters. You have a limited number of incorrect guesses before the game ends.

🧱 Component Breakdown

Component	Responsibility
App.tsx	Root app logic, routing (if needed), layout
Game.tsx	Handles game loop, state, and renders subcomponents
WordDisplay.tsx	Shows the partially guessed word
Keyboard.tsx	Interactive letter buttons
GameStatus.tsx	Shows win/loss messages and reset button
HangmanDrawing.tsx	Optional: shows hangman figure (stick drawing, emoji, or text-based)

📦 State Breakdown

State Variable	Type	Purpose
wordToGuess	string	The secret word the user is trying to guess
guessedLetters	string[]	Letters the user has guessed so far
incorrectGuesses	number	Count of wrong guesses
maxGuesses	number	Limit before game over
gameStatus	'playing' | 'won' | 'lost'	For rendering status component

