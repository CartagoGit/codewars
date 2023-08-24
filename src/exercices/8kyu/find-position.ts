//* https://www.codewars.com/kata/5808e2006b65bff35500008f/train/typescript

export function position(alphabet:string):string {

    const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    const position = alphabetArray.indexOf(alphabet.toLowerCase()) + 1;
    return `Position of alphabet: ${position}`;
  }