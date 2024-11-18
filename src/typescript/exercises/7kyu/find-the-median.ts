//* https://www.codewars.com/kata/5864eb8039c5ab9cd400005c/train/typescript

export function median(n: number[]): number {
    n.sort((a, b) => a - b);
    const middle = Math.floor(n.length / 2);
    return n.length % 2 !== 0 ? n[middle] : (n[middle - 1] + n[middle]) / 2;
}