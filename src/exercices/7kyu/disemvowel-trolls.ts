//* https://www.codewars.com/kata/52fba66badcd10859f00097e/train/typescript

export class Kata {
	public static disemvowel = (str: string): string =>
		str.replace(/[aeiou]/gi, "");
}
