//* https://www.codewars.com/kata/57a77726bb9944d000000b06/train/typescript

export function mango(quantity: number, price: number): number{
    const paidQ = Math.floor(quantity / 3) * 2 + (quantity % 3);
    return paidQ * price;
  }

  
