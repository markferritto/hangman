import React from "react";
import { GameStatus } from "../lib/hangmanLogic";

interface GameStatusProps {
  status: GameStatus;
  onReset: () => void;
}

const GameStatusDisplay: React.FC<GameStatusProps> = ({ status, onReset }) => {
  if (status === GameStatus.PLAYING) return null;

  const message = status === GameStatus.WON ? "🎉 You won!" : "💀 Game over!";

  return (
    <div style={{ marginTop: "24px" }}>
      <h2>{message}</h2>
      <button
        onClick={onReset}
        style={{ fontSize: "1rem", padding: "8px 16px" }}
      >
        Play Again
      </button>
    </div>
  );
};

export default GameStatusDisplay;