import { default as boardView } from "../Views/BoardView.js";


class UI {
    #boardView = null;


    constructor(boardView) {
        this.#boardView = boardView;
    }

    renderBoard() {
        this.#boardView.renderBoard();
    }

    
}

export default new UI(boardView);