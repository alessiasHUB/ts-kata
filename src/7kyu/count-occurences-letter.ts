/**
 * title: Count occurrences of all letters in a string
 * date: 18/11/2022
 * link: -
 * ============================================================
 * task:
 * Write a function, countOccurrences which takes a string and 
 * returns an object detailing the number of occurrences in the 
 * string of each letter in the string.
 * ============================================================
 * @param a - the string to evaluate
 * @returns an object with each letter: number
 */
function countOccurrences(a: string): object {
  const occObject : any = {}
  for (let i=0; i<a.length; i++){
    if (occObject[a[i]] === undefined && a[i]!=" ") {
      occObject[a[i]] = 1
    } else if (a[i]!=" ") {
      occObject[a[i]] += 1
    }
    console.log(occObject)
  }
  return occObject;
}

export default countOccurrences;
