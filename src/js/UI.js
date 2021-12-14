import { default as boardView } from "./Views/BoardView.js";
import { default as turnView } from "./Views/TurnView.js";
import { default as buttonPanelView} from "./Views/ButtonPanelView.js";
import { default as occurrenceStatusView } from "./Views/OccurrenceStatusView.js";
import { default as codeCombinationView } from "./Views/CodeCombinationView.js";
import { default as alertView } from "./Views/AlertView.js";
import { default as highscoreView } from "./Views/HighscoreView.js";

class UI {
    #boardView = null;
    #turnView = null;
    #occurrenceStatusView = null;
    #buttonPanelView = null;
    #codeCombinationView = null;
    #alertView = null;
    #highscoreView = null;

    constructor(
        boardView, 
        turnView, 
        occurrenceStatusView, 
        buttonPanelView,
        codeCombinationView,
        alertView,
        highscoreView
        ) {
        this.#boardView = boardView;
        this.#turnView = turnView;
        this.#buttonPanelView = buttonPanelView;
        this.#occurrenceStatusView = occurrenceStatusView;
        this.#codeCombinationView = codeCombinationView;
        this.#alertView = alertView;
        this.#highscoreView = highscoreView;
    }

    displayGame() {
        const wrapper = document.querySelector('.game-wrapper');
        const menu = document.querySelector('.game-menu');
        wrapper.style.display = "block";
        menu.style.display = "none"; 
    }

    renderBoard(difficulty) {
        this.#boardView.renderBoard(difficulty);
    }

    updateTurn(currentTurn, isActive = true) {
        this.#turnView.updateTurn(currentTurn, isActive);
    }

    renderButtonPanel(difficulty) {
        this.#buttonPanelView.renderButtonPanel(difficulty);
    }

    renderOccurrenceStatus(currentTurn, occurrenceStatus, difficulty) {
        this.#occurrenceStatusView.renderOccurrenceStatus(
            currentTurn,
            occurrenceStatus,
            difficulty
        );
    }

    renderCodeCombination(currentTurn, guessedCode, difficulty) {
        this.#codeCombinationView.renderCodeCombination(currentTurn, guessedCode, difficulty);
    }

    renderHighScores(highscores) {
        this.#highscoreView.renderHighScores(highscores);
    }

    showAlertOnInvalidInput(difficulty) {
        this.#alertView.showAlertOnInvalidInput(difficulty);
    }
    
      // show alert for winning condition
    showAlertForWinningCondition() {
        this.#alertView.showAlertForWinningCondition();
    }
    
    showAlertForLosingCondition(secretCode, difficulty) {
        this.#alertView.showAlertForLosingCondition(secretCode, difficulty);
    }

    toggleAlert() {
        this.#alertView.toggleAlert();
    }
}

export default new UI(
    boardView, 
    turnView, 
    occurrenceStatusView,
    buttonPanelView,
    codeCombinationView,
    alertView,
    highscoreView
    );