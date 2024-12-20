//* https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/typescript

export function solve(s: string) {
    const vowels = s.match(/[aeiou]+/g) || [];
    return Math.max(...vowels.map(v => v.length));
}