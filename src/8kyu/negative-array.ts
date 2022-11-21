/**
 * title: return an array of negative numbers
 * date: 31/10/2022
 * link: -
 * ============================================================
 * task:
 * return an array of all negative numbers in an array of
 * numbers (no array functions)
 * ============================================================
 * @param a - an array of numbers
 * @returns array one with only negative numbers
 * ============================================================
 * PROBLEM:
 * We're given an array of numbers,
 * both positive(+) and negative(-).
 * The task is to create an array with only the numbers that
 * were negative(-) from our initial array
 *
 * examples:
 * (1) INPUT_ARRAY = [-1, 10, 2, -3, 6]
 *     FUNCTION_RETURNS = [-1, -3]
 *
 * (2) INPUT_ARRAY = [-0.5, 200, -2, -3.85, 6]
 *     FUNCTION_RETURNS = [-0.5, -2, -3.85]
 *
 * (3) INPUT_ARRAY = [3, 6, 9]
 *     FUNCTION_RETURNS = []
 *
 * logic quiz:
 * (1) INPUT_ARRAY = [-50, -1, 5, -5, 0]
 *     FUNCTION_RETURNS = [?]
 *
 * (2) INPUT_ARRAY = [?]
 *     FUNCTION_RETURNS = [?]
 *
 */

function negArray(a: number[]): number[] {
  const aNeg = [];
  for (let num of a) {
    if (num < 0) {
      aNeg.push(num);
    }
  }
  return aNeg;
}

export default negArray;
