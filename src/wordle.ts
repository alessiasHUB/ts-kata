/**
 * title: Wordle
 * date: 29/11/2022
 * link: -
 * ============================================================
 * task:
 * 
 * ============================================================
 * checks if a guess matches the correct answer
 * @param guess - the guess
 * @param hiddenTarget - the correct answer
 * @returns the result
 */
type ValidResults = 'green' | 'yellow' | 'grey'
type MarkedGuess = [ValidResults, ValidResults, ValidResults, ValidResults, ValidResults]

function markWordleGuess(guess: string, hiddenTarget: string): MarkedGuess {
  const inputArr = guess.split('')
  const targetArr = hiddenTarget.split('')
  const result : MarkedGuess = ['grey', 'grey', 'grey', 'grey', 'grey']
  
  for (let i=0; i<inputArr.length; i++){
    // inputArr.indexOf(inputArr[i]) === i
    const count: number = targetArr.filter(letter => letter === inputArr[i]).length
    if (inputArr[i] === targetArr[i]){
      result.splice(i, 1, 'green')
    } else if (targetArr.includes(inputArr[i]) && count >= 1 ){
      console.log(count)
      result.splice(i, 1, 'yellow')
    }
  }
  return result
}

console.log(markWordleGuess('HOLAS','HELLO'))
// ['green','yellow','green','grey','grey']
export default markWordleGuess;
