export let gameState = {
    difficulty: null,
    secretCode: [],
    guessedCode: [],
    currentTurn: 1,
    occurrenceStatus: {},
};

export const setDifficulty = (difficulty) => {
    gameState.difficulty = difficulty;
}

export const getDifficulty = () => {
    return gameState.difficulty;
}

export const setSecretCode = (randomNumbers) => {
   gameState.secretCode = randomNumbers;
}

export const getSecretCode = () => {
    return gameState.secretCode;
}

export const getGuessedCode = () => {
   return gameState.guessedCode;
}

export const setCurrentTurn = (currentTurn) => {
    gameState.currentTurn = currentTurn;
}

export const incrementTurn = () => {
    gameState.currentTurn++;
}

export const getCurrentTurn = () => {
    return gameState.currentTurn;
 }

 export const setOccurenceStatus = (occurrenceStatus) => {
     gameState.occurrenceStatus = occurrenceStatus;
 }

 export const getOccurenceStatus = () => {
    gameState.occurrenceStatus;
}