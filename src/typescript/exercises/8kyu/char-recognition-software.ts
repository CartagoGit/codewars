//* https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/typescript

export function correct(s: string): string {
	return s
		.split('')
		.map((char) =>
			char === '5' ? 'S' : char === '0' ? 'O' : char === '1' ? 'I' : char
		)
		.join('');
}
