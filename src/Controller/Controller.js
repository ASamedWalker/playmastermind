import {default as codeMaker } from "../CodeMaker.js";
import * as model from "../Model/Model.js";
import { maxTries } from "../Config.js";
import { default as UI } from "../UI.js"

// Await our promise
const initModel = async () => {
    model.setCurrentTurn(1);
    
    let secretCode = await codeMaker.fetchRandomNumbers();
    model.setSecretCode(secretCode);
}
// -----------------------------------------------

// Initializer 
const startGame = () => {
    initModel();
}

startGame();