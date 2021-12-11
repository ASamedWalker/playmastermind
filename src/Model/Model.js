export let gameState = {
    secretCode: [],
    guessedCode: [],
    currentTurn: 1
};

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