//* https://www.codewars.com/kata/55b4d87a3766d9873a0000d4/train/typescript

export function howMuch(m: number, n: number): string[][] {
	const min = Math.min(m, n);
	const max = Math.max(m, n);
	let answers: string[][] = [];
	const carPrice = 9;
	const carRest = 1;
	const boatPrice = 7;
	const boatRest = 2;
	for (let i = min; i <= max; i++) {
		const cars = (carRest - (i - carRest)) / carPrice;
		const boats = (boatRest - (i - boatRest)) / boatPrice;
		if (cars >= 0 && boats >= 0 && cars === boats)
			answers.push([`M: ${i}`, `B: ${boats}`, `C: ${cars}`]);
	}

	return answers;
}
