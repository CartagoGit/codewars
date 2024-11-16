//* https://www.codewars.com/kata/5813d19765d81c592200001a/train/typescript

export function dontGiveMeFive(start: number, end: number): number {
    let counter = 0;
    for (let i = start; i <= end; i++) {
        if (!i.toString().includes('5')) counter++;
    }
    return counter;
}