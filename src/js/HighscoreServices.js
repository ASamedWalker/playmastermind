import * as model from "./Model.js"
import { localStorageKey, maxEntries } from "../js/Config.js";

class HighscoreService {
    constructor() {
        const highscores = localStorage.getItem(localStorageKey);
        /* console.log(highscores); */
        if (null !== highscores) {
            model.setHighScores(JSON.parse(highscores));
        }
    }

    clearHighscores() {
        localStorage.clear(localStorageKey);
    }

    addScore(highscoreData) {
        model.getHighScores().push(highscoreData);
        this.#sortHighScores();
        model.setHighScores(this.#sliceHighScores());
        this.#storeHighScores();
    }

    #sliceHighScores() {
        return model.getHighScores().slice(0, maxEntries);
    }

    #sortHighScores() {
        return model.getHighScores().sort((a, b) => {
            if (a.numOfTries > b.numOfTries) return 1;
            if (a.numOfTries < b.numberOfTries) return -1;
            if (a.duration > b.duration) return 1;
            if (a.duration < b.duration) return -1;
        });
    }

    #storeHighScores() {
        localStorage.setItem(localStorageKey, JSON.stringify(model.getHighScores()))
    }
}

export default new HighscoreService();