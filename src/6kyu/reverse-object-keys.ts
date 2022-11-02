/**
 * title: Capitals Quiz pt 1 - working with Object key-value pairs
 * date: 02/11/2022
 * link: -
 * ============================================================
 * task:
 * Write a function, `printCapitalsQuiz(capitalsObject)` which 
 * takes an object of country-capital key-value pairs, and 
 * prints to console, one quiz question and answer per pair, 
 * involving the capital and the country, with the following 
 * form: ”Of what country is **Reykjavík** the capital?: 
 * Answer: **dnalecI**” (note, the country should be reversed 
 * to make it harder for the reader to accidentally cheat).
 * ============================================================
 * Adds together two numbers
 * @param capitalsObject - input object
 */

 function printCapitalsQuiz(capitalsObject:any):void {
  for (let key in capitalsObject){
    let keyBackwards = ""
    for (let i=key.length-1; i>=0; i--){
      keyBackwards += key[i]
    }
    console.log("Of what country is ", capitalsObject[key], " the capital?: Answer: " , keyBackwards);
  }
}

const capital = {
  Afghanistan: "Kabul",
  Angola: "Luanda",
  Brazil: "Brasília",
  Canada: "Ottawa",
  China: "Beijing",
  Cuba: "Havana",
  Denmark: "Copenhagen",
  Iceland: "Reykjavík",
  Japan: "Tokyo",
  Kazakhstan: "Astana",
  Mexico: "Mexico City",
  Nigeria: "Abuja",
  Philippines: "Manila",
  Ukraine: "Kiev",
};

printCapitalsQuiz(capital)