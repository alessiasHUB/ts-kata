/**
 * Partition a given list of numbers into two arrays:
 * one of its odd elements, one of its even elements
 * ==========
 * @param numberArray - INPUT_ARRAY of numbers
 * @returns an object of two number arrays
 * ==========
 * declare two empty arrays, ODD_NUMBERS and EVEN_NUMBERS
 * FOR each number in INPUT_ARRAY
 *  IF number is even
 *      add number to EVEN_NUMBERS
 *  ELSE
 *      add number to ODD_NUMBERS
 * END FOR
 * RETURN an object containing ODD_NUMBERS and EVEN_NUMBERS
 */

function partitionOddEven(numArray: number[]): object {
  const evenNums = [];
  const oddNums = [];
  for (const num of numArray) {
    num % 2 === 0 ? evenNums.push(num) : oddNums.push(num);
  }
  return { odd: oddNums, even: evenNums };
}

export default partitionOddEven;
