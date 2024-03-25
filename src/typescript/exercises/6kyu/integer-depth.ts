//* https://www.codewars.com/kata/59b401e24f98a813f9000026/typescript

export function computeDepth(n: number): number {
	const uniqueDigits = new Set();
	const areComputed = () => uniqueDigits.size === 10;
    let i = 0;
    while (!areComputed()) {
        i++;
        const product = n * i;
        product.toString().split('').forEach(digit => uniqueDigits.add(digit));
    }
	return i;
}
