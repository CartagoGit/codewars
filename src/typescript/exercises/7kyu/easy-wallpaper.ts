//* https://www.codewars.com/kata/567501aec64b81e252000003/train/typescript

const englishNums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]

export function wallpaper(length: number, width: number, height: number, percentageExtra : number = 15): string {
    if (length === 0 || width === 0 || height === 0) return englishNums[0];
    // There are front and back walls, and left and right walls
    const wallArea = (length + width) * 2 * height
    const rollArea = 52 / 100 * 10; 
    const totalNeeded  = wallArea * (1 + percentageExtra / 100);
    return englishNums[Math.ceil(totalNeeded / rollArea)];
}
