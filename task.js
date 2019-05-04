// Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
//
//   A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
//
//   Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
//
//   1) your referral bonus, and
//
// 2) the price of a beer can
//
// For example:

// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16

// Returns number of complete beeramid levels
let beeramid = function (bonus, price) {
  if (bonus <= 0) {
    return 0;
  }

  class LevelsGenerator {
    constructor() {
      this._level = 0;
    }

    get level() {
      return this._level - 1;
    }
    next() {
      this._level++;
      const value = this._level * this._level;

      return value;
    }
  }
  const generator = new LevelsGenerator();
  let beerPrice = price * generator.next();

  while (bonus - beerPrice >= 0) {
    beerPrice += price * generator.next();

  }

  return generator.level;
};

beeramid(9, 2);
beeramid(10, 2);
beeramid(21, 1.5);

