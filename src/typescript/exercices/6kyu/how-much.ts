//* https://www.codewars.com/kata/55b4d87a3766d9873a0000d4/train/typescript

export function howMuch(m: number, n: number): string[][] {
	const boat = { price: 7, rest: 2 };
	const car = { price: 9, rest: 1 };
	let answers: string[][] = [];
	for (let money = Math.min(m, n); money <= Math.max(m, n); money++) {
		const numBoats = (money - boat.rest) / boat.price;
		const numCars = (money - car.rest) / car.price;
		if (Number.isInteger(numBoats) && Number.isInteger(numCars))
			answers.push([`M: ${money}`, `B: ${numBoats}`, `C: ${numCars}`]);
	}
	return answers;
}
