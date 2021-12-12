import { default as codeMaker } from "../js/CodeMaker.js";
import * as model from "../Model/Model.js";
import { maxTries, minNumber, codeLength} from "../js/Config.js";
import { default as UI } from "../js/UI.js";

// Await our promise
const initModel = async () => {
  model.setCurrentTurn(1);

  let secretCode = await codeMaker.fetchRandomNumbers();
  model.setSecretCode(secretCode);
};
// -----------------------------------------------

const initUI = () => {
  UI.renderBoard();
  UI.updateTurn(model.getCurrentTurn());
};

// Initializer
const startGame = () => {
  initModel();
  initUI();
};

startGame();

const compareCodes = (secretCode, guessedCode) => {
    let inPlaceCount = 0;
    let changedPlaceCount = 0;
    let wrongCount = 0;

    for (let i = 0; i < guessedCode.length; i++) {
        const index = secretCode.indexOf(guessedCode[i]);
        if (guessedCode[i] === secretCode[i]) {
            inPlaceCount++;
        } else if (index !== -1 && i !== index) {
            changedPlaceCount++;
        } else {
            wrongCount++;
        }
    }
    return { inPlaceCount, changedPlaceCount, wrongCount };
}
