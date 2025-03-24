import React from "react";
import { GameStatus } from "../lib/hangmanLogic";

interface GameStatusProps {
  status: GameStatus;
  onReset: () => void;
}

/**
 * Presentational component with clear separation of concerns.
 * This follows enterprise-level React patterns:
 * 1. Component composition
 * 2. Props as API contract
 * 3. Conditional rendering based on state
 * 
 * In a microservices architecture, this would be analogous to a 
 * service that consumes data and renders a specific view without
 * knowledge of business logic implementation.
 */

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