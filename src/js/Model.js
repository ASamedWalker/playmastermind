export let gameState = {
  difficulty: null,
  secretCode: [],
  guessedCode: [],
  currentTurn: 1,
  occurrenceStatus: {},
  highscores: [],
  startTime: null,
};

export const setDifficulty = (difficulty) => {
  gameState.difficulty = difficulty;
};

export const getDifficulty = () => {
  return gameState.difficulty;
};

export const setSecretCode = (randomNumbers) => {
  gameState.secretCode = randomNumbers;
};

export const getSecretCode = () => {
  return gameState.secretCode;
};

export const getGuessedCode = () => {
  return gameState.guessedCode;
};

export const setCurrentTurn = (currentTurn) => {
  gameState.currentTurn = currentTurn;
};

export const incrementTurn = () => {
  gameState.currentTurn++;
};

export const getCurrentTurn = () => {
  return gameState.currentTurn;
};

export const getOccurrenceStatus = () => {
  return gameState.occurrenceStatus;
};

export const setOccurrenceStatus = (occurrenceStatus) => {
  gameState.occurrenceStatus = occurrenceStatus;
};

export const resetGuessedCode = () => {
  gameState.guessedCode = [];
};

export const setHighScores = (highscores) => {
  gameState.highscores = highscores;
};

export const getHighScores = () => {
  return gameState.highscores;
};

export const initializeTime = () => {
  gameState.startTime = new Date();
};

export const calcDuration = () => {
  return new Date() - gameState.startTime;
};
