import {minNumber, gameDifficulty} from "./Config.js";

class CodeMaker {
  /*Use the async function to implicitly returns a 
    promise and await other promises*/
  async fetchRandomNumbers(difficulty = "normal") {
    const {codeLength, maxNumber} = gameDifficulty[difficulty];

    const apiURL = `https://www.random.org/integers/?num=${codeLength}&min=${minNumber}&max=${maxNumber}&col=1&base=10&format=plain&rnd=new`;
    try {
      const response = await fetch(apiURL, {
        method: "GET",
      });
      const result = await response.text();
      const randomSequence = result.split("\n").slice(0, codeLength);
      const randomNumbers = randomSequence.map((item) => {
        return parseInt(item, 10);
      });

      return randomNumbers;
    } catch (err) {
      console.log("There is an error at" + e);
    }

    return this.#generateRandomNumbers();
  }

  #generateRandomNumbers() {
    return ["0", "1", "2", "3"];
  }
}

export default new CodeMaker();
