//* https://www.codewars.com/kata/57b68bc7b69bfc8209000307/train/typescript

export function average(scores:number[]):number {
    return Math.round(scores.reduce((acc, cur) => acc + cur, 0) / scores.length);
}