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
	console.log('<------------------------------>', {
		fishes,
		size,
		amountToGrow,
		neededToGrow: funcAmountToGrow(size),
	}, '<------------------------------>');

	while (fishes.some((fish) => fish <= size)) {
		console.log({
			fishes,
			size,
			amountToGrow,
			neededToGrow: funcAmountToGrow(size),
			whileTrue: fishes.some((fish) => fish <= size),
		});
		const neededToGrow = funcAmountToGrow(size);
		amountToGrow += fishes[0];
		fishes.shift();
		if (amountToGrow >= neededToGrow) {
			console.log('GROWING');
			size++;
			amountToGrow = 0;
		}
	}
	console.log('RESULT: ', size);
	return size;
}
