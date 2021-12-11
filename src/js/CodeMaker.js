import {codeLength, minNumbers, maxNumbers} from "../js/Config.js"

class CodeMaker {
    /*Use the async function to implicitly returns a 
    promise and await other promises*/
    async fetchRandomNumbers() {
        const apiURL = `https://www.random.org/integers/?num=${codeLength}&min=${minNumbers}&max=${maxNumbers}&col=1&base=10&format=plain&rnd=new`;
        const response = await fetch(apiURL, {
            method: "GET",
        });
        const result = await response.text();
        const randomSequence = result.split("\n").slice(0, codeLength);
        const randomNumbers = randomSequence.map((item) => {
            return parseInt(item, 10);
        });

        return randomNumbers;
    }
}

export default new CodeMaker();