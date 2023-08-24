//* https://www.codewars.com/kata/5748838ce2fab90b86001b1a/train/typescript

export const squareArea = (num : number) : number =>  {
    // Your code goes here
    let radius = (num * 4) / (2 * Math.PI);
    let area = Math.pow(radius, 2);
    return Math.round(area * 100) / 100;
  }