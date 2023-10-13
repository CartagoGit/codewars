//* https://www.codewars.com/kata/56bdd0aec5dc03d7780010a5/train/typescript

export function nextHigher(num: number): number {
	// Count the number of bits '1' in the number
	const countBits = (value: number) =>
		value.toString(2).split('1').length - 1;
	const initBits = countBits(num);
	// Increment the number until we have the same number of bits '1'
	while (initBits !== countBits(++num)) {}
	return num;
}
