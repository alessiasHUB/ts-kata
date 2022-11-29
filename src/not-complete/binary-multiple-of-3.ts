/**
 * IT WORKS BUT THE KATA WANTS IT IN REGEX
 * title: Binary multiple of 3
 * date: 29/11/2022
 * link: https://www.codewars.com/kata/54de279df565808f8b00126a/train/javascript
 * =============================================================
 * task:
 * In this kata, your task is to create a regular expression
 * capable of evaluating binary strings (strings with only 1s
 * and 0s) and determining whether the given string represents
 * a number divisible by 3.
 * Take into account that:
 * - An empty string might be evaluated to true (it's not going
 *   to be tested, so you don't need to worry about it - unless
 *   you want)
 * - The input should consist only of binary digits - no spaces,
 *   other digits, alphanumeric characters, etc.
 * - There might be leading 0s.
 * =============================================================
 * Checks if a string represents a number divisible by 3
 * @param binaryString - the first number to add
 * @returns a boolean
 */
function multipleof3Regex(binaryString: string): boolean {
  // check that the string is in binary
  if (Number(binaryString) === undefined) {
    return false;
  }
  // count the binary in decimal
  let count = binaryString
    .split("")
    .map((num: string, i: number) => Number(num) * 2 ** i)
    .reduce((a, b) => a + b);
  /*let count = 0
  for (let i=0; i<binaryString.length; i++){
    // formula: n*2^i
    count += Number(binaryString[i]) * 2**i
  }*/
  if (count % 3 === 0) {
    return true;
  } else {
    return false;
  }
}

export default multipleof3Regex;
