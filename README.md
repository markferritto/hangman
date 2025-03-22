# 🕹️ Hangman Game (React + TypeScript + Redux)

A full-featured Hangman game built with React, TypeScript, and Redux Toolkit. This project was designed with interview-level architecture, component composition, and modern frontend practices.

## ✨ Features

- 🔠 Word guessing with live feedback
- 🎯 Game win/loss logic with status display
- ♻️ Redux Toolkit for global state management
- 💅 Component-based UI (WordDisplay, Keyboard, GameStatusDisplay)
- 🧠 Clean architecture with core logic isolated from UI
- 🧪 Testable logic layer
- 💾 Ready to extend with scoring, difficulty, and persistence

## 🧰 Tech Stack

- React
- TypeScript
- Redux Toolkit
- Vite
- CSS Modules (or vanilla CSS)
- Git + GitHub

## 🗂️ Project Structure

```
src/
├── components/    # Reusable presentational components
├── lib/           # Game logic and helpers
├── slices/        # Redux logic (state, actions, reducers)
├── store.ts       # Redux store config
├── App.tsx        # Main component
├── main.tsx       # App entry point
└── index.css      # Styles
```

## 🚀 Getting Started

```bash
git clone https://github.com/markferritto/hangman.git
cd hangman-game
npm install
npm run dev
```