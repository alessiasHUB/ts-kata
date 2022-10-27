/**
 * title: You're a square!
 * date: 27/10/2022
 * link: [link](https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript)
 * ============================================================
 * task:
 * Given an integral number, determine if it's a square number:
 * ============================================================
 * @param n - a number
 * @returns a boolean
 */

var isSquare = function(n: number): boolean{
  return n >= 0 && Math.sqrt(n) % 1 === 0 ? true : false
}

export default isSquare;
