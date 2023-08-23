//* https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/typescript

export function addLength(str: string): string[] {
    // your code here
    return str.split(' ').map((word) => `${word} ${word.length}`);
  }