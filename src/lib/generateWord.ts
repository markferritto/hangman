export const WORD_LIST = [
  "react",
  "typescript",
  "hangman",
  "frontend",
  "developer",
];

export function getRandomWord(): string {
  const index = Math.floor(Math.random() * WORD_LIST.length);
  return WORD_LIST[index];
}
