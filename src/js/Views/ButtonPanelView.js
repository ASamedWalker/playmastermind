import { gameDifficulty } from "../Config.js";

class ButtonPanelView {
    #element = document.querySelector(".number-picker-view");

    renderButtonPanel(difficulty) {
        this.#element.innerHTML = "";

        let html = "";

        html += this.getHTMLForNumberPickerButtons(difficulty);
        html += this.getHTMLForControlButtons();

        //result of HTML inserted in the DOM
        this.#element.insertAdjacentHTML("beforeend", html);
    }

    getHTMLForNumberPickerButtons(difficulty) {
        let html = "";
        for (let i = 0; i <= gameDifficulty[difficulty].maxNumber; i++) {
            html += `<button class="choice-btn" data-selected-number="${i}">${i}</button>`
         }
         return html;
    }

    getHTMLForControlButtons() {
        let html = `
            <button class="control-btn" data-control="undo">Undo</button>
            <button class="control-btn" data-control="submit">Submit</button>
        `;
        return html;
    }
}

export default new ButtonPanelView();