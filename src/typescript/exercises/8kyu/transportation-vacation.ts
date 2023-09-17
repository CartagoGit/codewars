//* https://www.codewars.com/kata/568d0dd208ee69389d000016/typescript

export const rentalCarCost = (days: number): number =>
	days * 40 - (days >= 7 ? 50 : days >= 3 ? 20 : 0);
