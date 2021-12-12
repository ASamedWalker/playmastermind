import { default as boardView } from "../Views/BoardView.js";
import { default as turnView } from "../Views/TurnView.js";
import { default as occurrenceStatusView } from "../Views/TurnView.js";


class UI {
    #boardView = null;
    #turnView = null;
    #occurenceStatusView = null;

    constructor(boardView, turnView, occurenceStatusView) {
        this.#boardView = boardView;
        this.#turnView = turnView;
        this.#occurenceStatusView = occurenceStatusView;
    }

    renderBoard(difficulty) {
        this.#boardView.renderBoard(difficulty);
    }

    updateTurn(currentTurn, isActive = true) {
        this.#turnView.updateTurn(currentTurn, isActive);
    }

    renderOccurenceStatus(currentTurn, occurrenceStatus) {
        this.#occurenceStatusView.renderOccurenceStatus(
            currentTurn,
            occurrenceStatus
        );
    }
    
}

export default new UI(boardView, turnView, occurrenceStatusView);