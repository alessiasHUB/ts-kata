/**
 * title: Wordle
 * date: 29/11/2022
 * link: https://www.notion.so/weareacademy/Marking-Wordle-Guesses-TypeScript-3e378f71438142dea8f079763a9f4a25
 * ============================================================
 * task:
 * Write a function, `markWordleGuess(guess: string, 
 * hiddenTarget: string):MarkedGuess` which calculates the 
 * correctness hints for each letter of a given single guess in 
 * Wordle based on the given hidden target.
 * Assume that the strings guess and hiddenTarget are always 
 * formed of exactly 5 upper-case alphabet characters 
 * (often with repeats).
 * ============================================================
 * checks if a guess matches the correct answer
 * @param guess - the guess
 * @param hiddenTarget - the correct answer
 * @returns the result
 */
type ValidResults = "green" | "yellow" | "grey";
type MarkedGuess = [
  ValidResults,
  ValidResults,
  ValidResults,
  ValidResults,
  ValidResults
];

function markWordleGuess(guess: string, hiddenTarget: string): MarkedGuess {
  const inputArr = guess.split("");
  const targetArr = hiddenTarget.split("");
  const result: MarkedGuess = ["grey", "grey", "grey", "grey", "grey"];

  for (let i = 0; i < inputArr.length; i++) {
    // inputArr.indexOf(inputArr[i]) === i
    const count: number = targetArr.filter(
      (letter) => letter === inputArr[i]
    ).length;
    if (inputArr[i] === targetArr[i]) {
      result.splice(i, 1, "green");
    } else if (targetArr.includes(inputArr[i]) && count >= 1) {
      console.log(count);
      result.splice(i, 1, "yellow");
    }
  }
  return result;
}

console.log(markWordleGuess("HOLAS", "HELLO"));
// ['green','yellow','green','grey','grey']
export default markWordleGuess;
