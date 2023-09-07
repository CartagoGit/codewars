//* https://www.codewars.com/kata/55b4d87a3766d9873a0000d4/train/typescript

export function howMuch(m: number, n: number): string[][] {
	const boat = { price: 7, rest: 2 };
	const car = { price: 9, rest: 1 };
	let answers: string[][] = [];
	for (let i = Math.min(m, n); i <= Math.max(m, n); i++) {
		const numBoats = (i - boat.rest) / boat.price;
		const numCars = (i - car.rest) / car.price;
		if (Number.isInteger(numBoats) && Number.isInteger(numCars))
			answers.push([`M: ${i}`, `B: ${numBoats}`, `C: ${numCars}`]);
	}
	return answers;
}
