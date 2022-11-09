/**
 * title: partition
 * date: 09/11/2022
 * link: -
 * ============================================================
 * task:
 * Write ‘partition’ to separate a list into two, according to
 * a "predicate" function
 * ============================================================
 * Adds together two numbers
 * @param a - the first number to add
 * @param b - the second number to add
 * @returns the total
 */
export function callbackFn(element: number): boolean {
  return element % 2 !== 0;
}

export function partition(arr: number[], callbackFn: Function): number[][] {
  const result : number[][] = [[],[]];
  for (let i=0; i<arr.length; i++) {
    if (callbackFn(arr[i])) {
      result[0].push(arr[i])
    } else {
      result[1].push(arr[i])
    }
  }
  return result;
}

// console.log(partition([1, 3, 4, 5], callbackFn));
