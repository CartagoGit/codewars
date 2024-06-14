//* https://www.codewars.com/kata/5861d28f124b35723e00005e/train/typescript

export const zeroFuel = (
	distance: number,
	mpg: number,
	fuelLeft: number
): boolean => {
	return distance <= mpg * fuelLeft;
};
