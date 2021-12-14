import { gameDifficulty } from "../Config.js";

class CodeCombinationView {
    renderCodeCombination(currentTurn, guessedCode, difficulty) {
        const element = document.querySelector(`[data-turn="${currentTurn}"]`);
        
        for (let i = 0; i < gameDifficulty[difficulty].codeLength; i++) {
            const numberElement = element.querySelector(`[data-choice="${i}"] span`);
            if (guessedCode[i] !== undefined) {
                numberElement.innerHTML = guessedCode[i];
            } else {
                numberElement.innerHTML = "";
            }
        }
    }

}

export default new CodeCombinationView();