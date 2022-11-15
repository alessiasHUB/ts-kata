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
 * @param a - the first word
 * @param b - the second word
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

function isAnagram(a: string, b: string): boolean {
  
  return false;
}

export default isAnagram;
