import {default as codeMaker } from "../js/CodeMaker.js";
import * as model from "../Model/Model.js";
import { maxTries } from "../js/Config.js";
import { default as UI } from "../js/UI.js"

// Await our promise
const initModel = async () => {
    model.setCurrentTurn(1);

    let secretCode = await codeMaker.fetchRandomNumbers();
    model.setSecretCode(secretCode);
}
// -----------------------------------------------


const initUI = () =>  {
    UI.renderBoard();
}

// Initializer 
const startGame = () => {
    initModel();
    initUI();
}

startGame();