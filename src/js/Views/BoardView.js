import { maxTries, gameDifficulty } from "../Config.js";

class BoardView {
  #element = document.querySelector(".game-board-view");

  renderBoard(difficulty) {
    this.#element.innerHTML = "";

    for (let i = 1; i <= maxTries; i++) {
      const html = `
                <div class="game-try" data-turn="${i}">
                    <div class="choice-row">
                    ${this.getHTMLForChoices(difficulty)}
                    </div>

                    <div class="occurrence-status-row" data-turn="${i}">
                        ${this.getHTMLForOccurrenceStatusFlags(difficulty)}
                    </div>
                </div>
                `;
      this.#element.insertAdjacentHTML("afterbegin", html);
    }
  }

  getHTMLForChoices(difficulty) {
    let html = "";
    for (let i = 0; i < gameDifficulty[difficulty].codeLength; i++) {
      html += `
            <div class="choice choice-number" data-choice="${i}">
            <span class="number"></span>
            </div>`;
    }
    return html;
  }

  getHTMLForOccurrenceStatusFlags(difficulty) {
    let html = "";
    for (let i = 0; i < gameDifficulty[difficulty].codeLength; i++) {
      html += `<div class="choice occurrence-status-flag" data-occurrence-status="${i}"></div>`;
    }
    return html;
  }
}

export default new BoardView();
