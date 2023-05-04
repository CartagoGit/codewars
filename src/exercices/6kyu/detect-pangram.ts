//* https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/typescript

// export const isPangram = (phrase: string): boolean => {
// 	const alphabet = "abcdefghijklmnopqrstuvwxyz";
// 	const phraseLetters = phrase
// 		.toLowerCase()
// 		.split("")
// 		.map((letter) => letter.trim())
// 		.filter((letter) => letter && alphabet.includes(letter) );
// 	const numLetters = new Set(phraseLetters).size;
// 	return alphabet.length === numLetters;
// };

// export const isPangram = (phrase: string): boolean =>
// 	"abcdefghijklmnopqrstuvwxyz"
// 		.split("")
// 		.every((letter) => phrase.toLowerCase().includes(letter));

export const isPangram = (phrase: string): boolean =>
	new Set(phrase.toLowerCase().match(/[a-z]/g)).size ===
	"abcdefghijklmnopqrstuvwxyz".length;
