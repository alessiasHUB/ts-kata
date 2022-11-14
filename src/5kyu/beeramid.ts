/**
 * title: partition
 * date: 11/11/2022
 * link: https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/javascript
 * ============================================================
 * task:
 * A beer can pyramid will square the number of cans in each
 * level - 1 can in the top level, 4 in the second, 9 in the
 * next, 16, 25...
 * ============================================================
 * Adds together two numbers
 * @param bonus - amount of money for purchase
 * @param price - how much each beer costs
 * @returns the total amount of layers in pyramid
 */

export var beeramid = function (bonus: number, price: number): number {
  let numBeers = bonus / price;
  if (numBeers < 1) {
    return 0;
  }
  let layers = [1];
  for (let i = 2; i < layers.length + 2; i++) {
    let beersLeft = numBeers - layers.reduce((a, b) => a + b, 0);
    if (beersLeft >= i * i) {
      layers.push(i * i);
    } else {
      return layers.length;
    }
  }
  return layers.length;
};
