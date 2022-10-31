/**
 * title: return an array of negative numbers 
 * date: 31/10/2022
 * link: -
 * ============================================================
 * task:
 * return an array of all negative numbers in an array of numbers (no array functions)
 * ============================================================
 * @param a - an array of numbers
 * @returns array one with only negative numbers
 */
function negArray(a: number[]): number[] {
  const aNeg = [];
  for (let num of a){
    if (num < 0){
      aNeg.push(num)
    }
  }
  return aNeg;
}

export default negArray;
