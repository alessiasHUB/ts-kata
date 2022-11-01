/**
 * title: Print all object keys
 * date: 01/11/2022
 * link: -
 * ============================================================
 * task:
 * Write a function, printAllKeys(obj) which takes an object
 * with unknown content and prints to console, one per line,
 * each key in the object.
 * ============================================================
 * Adds together two numbers
 * @param obj - input object
 */

function printAllKeys(obj: {}): void {
  for (let key in obj) {
    console.log(key);
  }
}

const capitals = {
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

printAllKeys(capitals);
