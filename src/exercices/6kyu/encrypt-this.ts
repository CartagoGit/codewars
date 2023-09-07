//* https://www.codewars.com/kata/5848565e273af816fb000449/train/typescript

export const encryptThis = (str: string): string => {
	return str
		.split(' ')
		.map((word) => {
			const first = word[0] ? word.charCodeAt(0) : '';
			const second = word[1] ?? '';
			const last = word.length > 2 ? word[word.length - 1] : '';
			const middle = word.slice(2, word.length - 1) ?? '';
			return `${first}${last}${middle}${second}`;
		})
		.join(' ');
};
