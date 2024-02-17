import { INPUT_DAY_01 } from './input';

export const initDay01 = () => {
	return trebuchet(INPUT_DAY_01);
};

const trebuchet = (input: string): number => {
	return input.split('\n').reduce((acc, curr) => {
		const numbersInString = curr
			.trim()
			.split('')
			.filter((char) => char.match(/\d/))
			.join('');
		const number = Number(
			numbersInString[0] + numbersInString[numbersInString.length - 1]
		);
		return acc + number;
	}, 0);
};
