//* https://www.codewars.com/kata/591eab1d192fe0435e000014/train/typescript

export function escape(carpark: number[][]): string[] {
	let startPlace: { floor: number; position: number };
	// Get start place
	carpark.forEach((element, index) => {
		const place = element.indexOf(2);
		if (place !== -1)
			return (startPlace = { floor: index, position: place });
	});
	let actualPlace = { ...startPlace! };
	let result: string[] = [];

	for (let floor = startPlace!.floor; floor < carpark.length; floor++) {
		const staircase = carpark[floor].indexOf(1);
		// If is last floor
		if (staircase === -1) {
			if (actualPlace.position === carpark[floor].length - 1) break;
			const steps = carpark[floor].length - actualPlace.position - 1;
			result.push(`R${steps}`);
			break;
		}
		// Else
		const side: string = actualPlace.position > staircase ? 'L' : 'R';
		const steps = Math.abs(actualPlace.position - staircase);
		result.push(`${side}${steps}`);
		// Look for downstairs
		for (let downs = floor + 1; downs < carpark.length; downs++) {
			const nextStaircase = carpark[downs].indexOf(1);
			if (nextStaircase !== -1 && nextStaircase === staircase) continue;
			result.push(`D${downs - floor}`);
			floor = downs - 1;
			actualPlace = { floor: downs, position: staircase };
			break;
		}
	}
	return result;
}
