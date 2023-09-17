//* https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/typescript

export function sumMix(x: any[]): number {
    return x.reduce((acc, curr) => acc + Number(curr), 0);
} 