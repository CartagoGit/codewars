//* https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/typescript

export function sumTwoSmallestNumbers(numbers:Array<number>):number {  
    const [min1, min2]  = numbers.sort((a, b) => a - b);
    return min1 + min2;
}