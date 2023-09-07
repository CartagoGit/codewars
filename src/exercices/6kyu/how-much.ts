//* https://www.codewars.com/kata/55b4d87a3766d9873a0000d4/train/typescript

export function howMuch(m: number, n: number): string[][] {
	const carPrice = 9;
	const carRest = 1;
	const boatPrice = 7;
	const boatRest = 2;
	let answers: string[][] = [];
	for (let i = Math.min(m, n); i <= Math.max(m, n); i++) {
		const cars = (i - carRest) / carPrice;
		const boats = (i - boatRest) / boatPrice;
		if (Number.isInteger(cars) && Number.isInteger(boats))
			answers.push([`M: ${i}`, `B: ${boats}`, `C: ${cars}`]);
	}

	return answers;
}
