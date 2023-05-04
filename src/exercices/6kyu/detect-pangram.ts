export const isPangram = (phrase: string): boolean => {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	const phraseLetters = phrase
		.toLowerCase()
		.split("")
		.map((letter) => letter.trim())
		.filter((letter) => letter && alphabet.includes(letter) );
	const numLetters = new Set(phraseLetters).size;
	return alphabet.length === numLetters;
};
