//* https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/typescript

export function longestConsec(strarr: string[], k: number): string {
    if (strarr.length === 0 || k > strarr.length || k <= 0) return "";
    const consecutives: string[] = [];
    for (let i = 0; i < strarr.length; i++) {
        consecutives.push(strarr.slice(i, i + k).join(""));
    }
    return consecutives.sort((a, b) => b.length - a.length)[0];
}