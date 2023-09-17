//* https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/typescript

export const high = (str: string): string => {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	const words = str.split(" ");
	const wordsScore = words.map((word) => {
		return word
			.split("")
			.reduce((acc, letter) => acc + alphabet.indexOf(letter) + 1, 0);
	});
	const indexOfHighestScore = wordsScore.indexOf(Math.max(...wordsScore));
	return words[indexOfHighestScore];
};
