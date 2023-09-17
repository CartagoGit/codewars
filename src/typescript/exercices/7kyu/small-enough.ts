//* https://www.codewars.com/kata/57cc981a58da9e302a000214/train/typescript

export function smallEnough(a: number[], limit: number): boolean{
    return !a.some((value) => value > limit)
  }