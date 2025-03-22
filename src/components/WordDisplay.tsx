import React from "react";

interface WordDisplayProps {
  word: string;
  guessedLetters: string[];
}

const WordDisplay: React.FC<WordDisplayProps> = ({ word, guessedLetters }) => {
  return (
    <div>
      {word.split("").map((char, index) => (
        <span
          key={`${char}-${index}`}
          style={{ marginRight: "8px", fontSize: "2rem", letterSpacing: "4px" }}
        >
          {guessedLetters.includes(char) ? char : "_"}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;
