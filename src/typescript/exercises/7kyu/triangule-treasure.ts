// https://www.codewars.com/kata/525e5a1cb735154b320002c8/train/typescript

// Return the nth triangular number
export function triangular(n: number): number {
    if (n <= 0) return 0;
    return n * (n + 1) / 2;
}