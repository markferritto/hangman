import React from "react";

interface KeyboardProps {
  guessedLetters: string[];
  onGuess: (letter: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ guessedLetters, onGuess }) => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap" }}>
      {letters.map((letter) => {
        const guessed = guessedLetters.includes(letter);

        return (
          <button
            key={letter}
            onClick={() => onGuess(letter)}
            disabled={guessed}
            style={{
              margin: "4px",
              padding: "8px",
              fontSize: "1rem",
              opacity: guessed ? 0.5 : 1,
              cursor: guessed ? "not-allowed" : "pointer",
            }}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
