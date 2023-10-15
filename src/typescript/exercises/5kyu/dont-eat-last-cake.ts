//* https://www.codewars.com/kata/5384df88aa6fc164bb000e7d/train/typescript

export class Player {
    constructor(cakes: number) {
      // Not sure if you need one
    }
    // Decide who moves first - player or opponent (true if player)
    firstmove(cakes: number): boolean {
      // I wish to move first
      return true;
    }
    // Decide your next move
    move(cakes: number, last: number): number {
      // I'm not greedy
      return last == 1 ? 2 : 1;
    }
  }