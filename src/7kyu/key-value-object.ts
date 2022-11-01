/**
 * title: Print all key-value pairs in an object
 * date: 01/11/2022
 * link: -
 * ============================================================
 * task:
 * Write a function, printAllKeyValuePairs(obj) which takes an 
 * object with unknown content and prints to console, one per 
 * line, each key and value in the object.
 * ============================================================
 * Adds together two numbers
 * @param obj - input object
 */
function printAllKeyValuePairs(obj: any):void {
  for (let pairs in obj){
    console.log(pairs, obj[pairs])
  }
  
}

const characters :any = {
  Bruce: "Hulk",
  Peter: "Spiderman",
  Ororo: "Storm"
};

console.log(characters["Bruce"])
printAllKeyValuePairs(characters)

/* 
Bruce Hulk
Peter Spiderman
Ororo Storm
*/
