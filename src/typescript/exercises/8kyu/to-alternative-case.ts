//* https://www.codewars.com/kata/56efc695740d30f963000557/train/typescript

export const toAlternatingCase = (text: string): string => {
	return text
		.split("")
		.map((char) =>
			char === char.toUpperCase()
				? char.toLowerCase()
				: char.toUpperCase()
		)
		.join("");
};
