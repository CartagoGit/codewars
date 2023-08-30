//* https://www.codewars.com/kata/61771d1cf1c7eb004b7329f0/train/typescript

interface Coordinates {
	x: number;
	y: number;
}

//* Search for food in the island
export function searchForFood(
	island: string[],
	coordinates: number[],
	steps: number
): number {
	const islandCoordinates = island.map((row) => {
		return row.split('');
	});
	const coordinatesXY = { y: coordinates[0], x: coordinates[1] };
	const result = walk({
		// island: islandCoordinates,
		island,
		coordinates: coordinatesXY,
		steps,
		result: 0,
		maxResult: 0,
		isFirstStep: true,
	});
	console.log({
		island,
		coordinates,
		steps,
	});
	return result;
}

//* Walk through the island
const walk = (data: {
	// island: string[][];
	island: string[];
	coordinates: Coordinates;
	steps: number;
	result: number;
	maxResult: number;
	isFirstStep?: boolean;
}): number => {
	const { island, coordinates, isFirstStep = false } = data;
	if (!isValidPosition({ island, coordinates })) return 0;
	const { x, y } = coordinates;
	const value = island[y][x];
	let { steps, maxResult, result } = data;
	if (steps <= 0 || steps - (value === '$' ? 2 : 1) < 0) {
		if (isFirstStep) return !isNaN(Number(value)) ? Number(value) : 0;
		return Math.max(maxResult, result);
	}
	if (!isNaN(Number(value))) result += Number(value);
	// if (!isNaN(Number(value)) || value === '$') island[y][x] = '.';
	if (!isNaN(Number(value)) || value === '$')
		island[y] = island[y]
			.split('')
			.map((char, index) => (index === x ? '.' : char))
			.join('');
	if (!isFirstStep) steps = steps - (value === '$' ? 2 : 1);
	const sides = getBesides(coordinates);
	const newData = {
		// island: island.map((row) => [...row]),
		island: [...island],
		steps,
		result,
		maxResult,
	};
	return Math.max(
		walk({
			...newData,
			coordinates: sides.top,
		}),
		walk({
			...newData,
			coordinates: sides.right,
		}),
		walk({
			...newData,
			coordinates: sides.bottom,
		}),
		walk({
			...newData,
			coordinates: sides.left,
		})
	);
	// for (const newCoordinates of Object.values(sides)) {
	// 	if (!isValidPosition({ island, coordinates: newCoordinates })) continue;
	// 	maxResult = walk({
	// 		// island: island.map((row) => [...row]),
	// 		island: [...island],
	// 		steps,
	// 		result,
	// 		maxResult,
	// 		coordinates: newCoordinates,
	// 	});
	// }
	// return Math.max(maxResult, result);
};

//* Get the coordinates of the 4 squares besides the current one
const getBesides = (
	coordinates: Coordinates
): {
	top: Coordinates;
	right: Coordinates;
	bottom: Coordinates;
	left: Coordinates;
} => {
	const { x, y } = coordinates;
	return {
		top: { x, y: y - 1 },
		right: { x: x + 1, y },
		bottom: { x, y: y + 1 },
		left: { x: x - 1, y },
	};
};

//* Check if the coordinates are valid
const isValidPosition = (data: {
	island: string[];
	coordinates: Coordinates;
}): boolean => {
	const { island, coordinates } = data;
	const { x, y } = coordinates;
	const islandWidth = island[0].length;
	const islandHeight = island.length;
	return x >= 0 && x < islandWidth && y >= 0 && y < islandHeight;
};
