//* https://www.codewars.com/kata/56eb0be52caf798c630013c0/train/typescript

export function unluckyDays(year: number): number {
    let unluckyDays = 0;
    for (let month = 0; month < 12; month++) {
        const date = new Date(year, month, 13);
        if (date.getDay() === 5) unluckyDays++;
    }
    return unluckyDays;
}