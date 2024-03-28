//* https://www.codewars.com/kata/539ee3b6757843632d00026b/train/typescript

export const capitals = (word: string): number[] =>
	word
		.split('')
		.map((letter, index) => (letter === letter.toUpperCase() ? index : -1))
		.filter((index) => index !== -1);
