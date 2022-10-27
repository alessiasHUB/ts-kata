/**
 * title: x marks the spot
 * date: 27/10/2022
 * link: https://www.codewars.com/kata/5777fe3f355edbf0a5000d11
 * =======================================================================
 * task:
 * Given a two dimensional array, return the co-ordinates of x.
 * If x is not inside the array, or if x appears multiple times, return [].
 * The co-ordinates should be zero indexed in row-major order.
 * You should assume you will always get an array as input.
 * The array will only contain 'x's and 'o's.
 * ========================================================================
 * @params input - [][]
 * @returns number[]
 *
 * PROGRAMME xMarksTheSpot(input):
 * Set COORDINATES to equal []
 * FOR EACH array in input:
 *      FOR EACH element in the array:
 *         IF element is equal to 'x'
 *             Set COORDINATES to location of 'x'
 *         END IF.
 *     END FOR.
 * RETURN COORDINATES
 */

function xMarksTheSpot(input: string[][]): number[] {
  const coordinates = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === "x") {
        coordinates.push(i);
        coordinates.push(j);
      }
    }
  }
  return coordinates.length === 2 ? coordinates : [];
}

export default xMarksTheSpot;
