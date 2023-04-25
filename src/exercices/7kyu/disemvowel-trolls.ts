//* https://www.codewars.com/kata/52fba66badcd10859f00097e/train/typescript

export class Kata {
	public static disemvowel = (str: string): string => {
		const vowels = ["a", "e", "i", "o", "u"];
		return str
			.split("")
			.filter((letter) => !vowels.includes(letter.toLowerCase()))
			.join("");
	};
}
