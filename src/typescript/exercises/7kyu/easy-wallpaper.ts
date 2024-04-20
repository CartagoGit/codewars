//* https://www.codewars.com/kata/567501aec64b81e252000003/train/typescript

const englishNums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]


export function wallpaper(length: number, width: number, height: number): string {
    if (length === 0 || width === 0 || height === 0) return englishNums[0];
    // I Will do it in cms. Params come in meters
    const wallLength = length * 100;
    const wallWidth = width * 100;
    const wallHeight = height * 100;
    const longWall = (wallLength + wallWidth) * 2; // There are front and back walls, and left and right walls
    const wallArea = longWall * wallHeight;
    const rollLength = 10 * 100; // 10 meters to cm
    const rollWidth = 52;
    const rollArea = rollLength * rollWidth;
    const percentageExtra = 15;
    const totalNeeded  = wallArea * (1 + percentageExtra / 100);
    const rolls = Math.ceil(totalNeeded / rollArea);
    return englishNums[rolls];
}
