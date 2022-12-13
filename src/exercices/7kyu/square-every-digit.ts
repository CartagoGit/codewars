export class Kata {
    static squareDigits(num: number): number {
      return Number(num.toString().split('').map(num => Number(num)*Number(num)).join(''))
    }
  }