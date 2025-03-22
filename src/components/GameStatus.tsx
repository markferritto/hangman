import React from "react";
import type { GameStatus as GameStatusType } from "../lib/hangmanLogic";

interface GameStatusProps {
  status: GameStatusType;
  onReset: () => void;
}

const GameStatusDisplay: React.FC<GameStatusProps> = ({ status, onReset }) => {
  if (status === "playing") return null;

  const message = status === "won" ? "🎉 You won!" : "💀 Game over!";

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
