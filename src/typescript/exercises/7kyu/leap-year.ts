//* https://www.codewars.com/kata/526c7363236867513f0005ca/train/typescript

export const isLeap = (year: number): boolean =>
	(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
