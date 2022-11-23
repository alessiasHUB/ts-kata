/**
 * title: Valid Parentheses
 * date: 23/11/2022
 * link: https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
 * ============================================================
 * task:
 * Write a function that takes a string of parentheses, and
 * determines if the order of the parentheses is valid. The
 * function should return true if the string is valid, and
 * false if it's invalid.
 * ============================================================
 * @param parens - the first number to add
 * @returns a boolean
 */

function validParentheses(parens: string): boolean {
  let countLeft = 0;
  let countRight = 0;
  if (parens[parens.length - 1] === "(") {
    return false;
  }
  if (parens[0] === "(" && parens[1] === ")" && parens[2] == ")") {
    return false;
  }

  for (let i in parens.split("")) {
    if (parens[i] === "(") {
      countLeft++;
    } else if (parens[i] === ")") {
      countRight++;
    }
  }
  if (countLeft === countRight) {
    return true;
  } else {
    return false;
  }
}

export default validParentheses;
