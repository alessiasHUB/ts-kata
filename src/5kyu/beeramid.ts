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
 * squares the number of the layer to get number of beers in layer
 * @param bonus - amount of money for purchase
 * @param price - how much each beer costs
 * @returns the total amount of layers in pyramid
 * ============================================================
 * THE MATH EXPLAINED:
 * layer no.    no. of beers    math
 *  1             1             1^2 = 1
 *  2             4             2^2 = 4
 *  3             9             3^2 = 9
 *  4            16             4^2 = 16
 *  5            25             5^2 = 25
 *  ...
 * ----------------------------------------
 * 
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
