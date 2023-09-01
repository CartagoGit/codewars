//* https://www.codewars.com/kata/514a6336889283a3d2000001/train/typescript

export const getEvenNumbers = (numbersArray: number[]): number[] => {
	return numbersArray.filter((number) => number % 2 === 0);
};
