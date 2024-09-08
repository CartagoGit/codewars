//* https://www.codewars.com/kata/5904be220881cb68be00007d/train/typescript

export function fish(shoal: String): number {
	let size = 1;
	let amountToGrow = 0;
	const funcAmountToGrow = (size: number) => size * 4;

	const fishes = shoal
		.split('')
		.sort()
		.map(Number)
		.filter((fish) => !!fish);
	for (let fish of fishes) {
		console.log('fish:', fish, { size, amountToGrow });
		if (fish > size) break;
		else amountToGrow += fish;
		const needToGrow = funcAmountToGrow(size);
		console.log({ needToGrow, amountToGrow });
		if (amountToGrow >= needToGrow) {
			size++;
			amountToGrow = amountToGrow - needToGrow;
		}
	}
	return size;
}
