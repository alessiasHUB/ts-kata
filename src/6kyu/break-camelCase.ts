/**
 * kata: Break camelCase
 * link: https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
 * date: 26/10/2022
 *  kyu: 6
 * ============================================
 * removes camelCasing from input string
 * @param inputString - the given string
 * @returns updated string
 */

function breakCamelCase(inputString: string): string {
  const broken = [];
  for (let letter of inputString) {
    if (letter.toUpperCase() === letter) {
      broken.push(` ${letter}`);
    } else {
      broken.push(letter);
    }
  }
  return broken.join("");
}

export default breakCamelCase;
