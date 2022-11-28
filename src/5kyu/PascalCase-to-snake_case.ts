/**
 * title: Convert PascalCase string into snake_case
 * date: 27/11/2022
 * link: https://www.codewars.com/kata/529b418d533b76924600085d/train/javascript
 * ============================================================
 * task:
 * Complete the function/method so that it takes a PascalCase
 * string and returns the string in snake_case notation.
 * Lowercase characters can be numbers. If the method gets a
 * number as input, it should return a string.
 * ============================================================
 * Changes from PascalCase to snake_case
 * @param string - the string to modify
 * @returns the modified string
 */
function toUnderscore(string: string | number): string {
  return string
    .toString()
    .split(/(?=[A-Z])/)
    .join("_")
    .toLowerCase();
}

export default toUnderscore;
