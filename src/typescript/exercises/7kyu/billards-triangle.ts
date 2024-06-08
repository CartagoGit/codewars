//* https://www.codewars.com/kata/5bb3e299484fcd5dbb002912/train/typescript

export function pyramid(balls: number): number {
    let neededBalls = 1;
    let level = 1;
    while (balls >= neededBalls) {
      level++;
      neededBalls += level;
    }
    return level - 1
  }