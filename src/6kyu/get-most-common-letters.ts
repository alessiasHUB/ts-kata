/**
 * title: Count occurrences of all words in a text & list the top 3
 * date: 18/11/2022
 * link: -
 * ============================================================
 * task:
 * Write a function, `getMostCommonLetters` which takes a
 * string (inputText) and a number, numberOfWinners, and
 * returns an array listing the top N most frequently-occurring
 * letters in the word list along with the count of their
 * occurrences (where N is numberOfWinners). Where there is a
 * tie, sort in alphabetical order.
 * ============================================================
 * @param inputText - a string
 * @param numberOfWinners - the amount of winners
 * @returns winner array
 */

function getMostCommonLetters(
  inputText: string,
  numberOfWinners: number
): any[][] {
  const resObj: any = {};
  for (let letter of inputText.split("").sort()) {
    if (letter != " ") {
      resObj[letter] !== undefined ? resObj[letter]++ : (resObj[letter] = 1);
    }
  }

  const resArr: any[] = Object.entries(resObj).map(([k, v]) => [k, v]);
  const result: any[][] = [];
  const numArr: any[] = Object.entries(resObj).map(([k, v]) => v);
  const numbers: number[] = numArr.sort((a, b) => b - a);

  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j < resArr.length; j++) {
      if (resArr[j][1] == numbers[i]) {
        result.push(resArr[j]);
      }
    }
  }
  return result.slice(0, numberOfWinners);
}

export default getMostCommonLetters;
