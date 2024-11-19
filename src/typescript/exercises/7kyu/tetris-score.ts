//* https://www.codewars.com/kata/5da9af1142d7910001815d32/train/typescript

export function getScore(arr: number[]) {
    const baseScore = [0, 40, 100, 300, 1200];
    const capLvl = 10; // 10 lines for level
    let level = 0;
    let lines = 0;
    let score = 0;
    for (let value of arr) {
        level = Math.floor(lines / capLvl);
        lines += value;
        score += baseScore[value] * (level + 1);
    }
    return score;
}