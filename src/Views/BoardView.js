import { maxTries, maxNumbers, codeLength} from "../js/Config.js";

class BoardView {
    #element = document.querySelector(".game-board-view");

    renderBoard() {
        this.#element.innerHTML  = "";

        for(let i = 1; i <= maxTries; i++) {
            const html = `
            <div class="game-try" data-turn="${i}">
                <span>Turn ${i}</span>
                <div class="choice-row">
                ${this.getHTMLForChoices()}
                </div>
            </div>
            `;
            this.#element.insertAdjacentHTML("afterbegin", html);
        }
    }

    getHTMLForChoices() {
        let html = '';
        for (let i = 0; i < codeLength; i++) {
            html += `
            <div class="choice choice-number" data-choice=${i}">
            <span class="number"></span>
            </div>`;
        }
        return html;
    }

}

export default new BoardView();