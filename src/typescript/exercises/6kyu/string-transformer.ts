//* https://www.codewars.com/kata/5878520d52628a092f0002d0/train/typescript

export function stringTransformer(str: string) {
	const reverseWordOrder = str.split(' ').reverse().join(' ');
	const reverseCase = reverseWordOrder
		.split('')
		.map((char) =>
			char === char.toUpperCase()
				? char.toLowerCase()
				: char.toUpperCase()
		)
		.join('');
	return reverseCase;
}
