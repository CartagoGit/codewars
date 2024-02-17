//* https://www.codewars.com/kata/5375f921003bf62192000746/train/typescript

export const abbreviate = (str: string): string =>
	str.replace(
		/\b[a-zA-Z]{4,}\b/g,
		(word) => word[0] + (word.length - 2) + word[word.length - 1]
	);
