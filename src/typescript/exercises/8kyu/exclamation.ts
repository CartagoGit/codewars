//* https://www.codewars.com/kata/57faf12b21c84b5ba30001b0/train/typescript

export function remove(s: string): string {
	return (
		s
			.split('')
			.filter((char) => char !== '!')
			.join('') + '!'
	);
}
