/**
 * title: Detect if two strings are anagrams of each other.
 * date: 15/11/2022
 * link: -
 * ============================================================
 * task:
 * Write a function, `isAnagram` , which takes two strings and 
 * returns a boolean indicating whether or not the two strings 
 * are anagrams of each other - i.e. where each can be formed 
 * as a rearrangement of the letters of the other, with no 
 * letters left over. The strings are guaranteed to contain 
 * only characters a-z.
 * ============================================================
 * Adds together two numbers
 * @param firstString - the first word
 * @param secondString - the second word
 * @returns a boolean
 * ============================================================
 * PROGRAM:
 * IF A and B have the same LENGTH
 *  DECLARE i is equal to 0
 *  MAKE A and B into arrays
 *  WHILE A[i] is in B 
 *    remove A[i] from B
 *    incremeant i by 1
 *    IF LENGTH of A is equal to i
 *      RETURN true
 *    END IF
 *  END WHILE
 * END IF
 * RETURN false
 */

 function isAnagram(firstString: string, secondString:string): boolean {
  if (firstString.length === secondString.length) {
    let i = 0;
    const firstArr = firstString.split("");
    const secondArr = secondString.split("");
    while (secondArr.includes(firstArr[i])) {
      let letter = firstArr[i];
      secondArr.splice(secondArr.indexOf(letter), 1);
      console.log(secondArr);
      i++;
      if (i === firstArr.length) {
        console.log("here");
        return true;
      }
    }
  }
  return false;
}

export default isAnagram;
