// * https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/typescript

export function descendingOrder(n: number): number {
	return Number(
		n
			.toString()
			.split('')
			.sort((a, b) => parseInt(b) - parseInt(a))
			.join('')
	);
}
