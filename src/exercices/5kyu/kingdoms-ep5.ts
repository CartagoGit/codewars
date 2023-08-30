//* https://www.codewars.com/kata/61771d1cf1c7eb004b7329f0/train/typescript

export function searchForFood(
	island: string[],
	coordinates: number[],
	steps: number
): number {
	const islandCoordinates = island.map((row, y) => {
		return row.split('');
	});
	console.log({ island, coordinates, steps });
	const result = walk({ island: islandCoordinates, coordinates, steps });
	return result;
}

const walk = (data: {
	island: string[][];
	coordinates: number[];
	steps: number;
}): number => {
	let result = 0;
	return result;
};

//* Get the coordinates of the 4 squares besides the current one
const getBesides = (
	coordinates: number[]
): {
	top: [number, number];
	right: [number, number];
	bottom: [number, number];
	left: [number, number];
} => {
	const [x, y] = coordinates;
	return {
		top: [x, y - 1],
		right: [x + 1, y],
		bottom: [x, y + 1],
		left: [x - 1, y],
	};
};

//* Check if the coordinates are valid
const isValidPosition = (data: {
	island: string[][];
	coordinates: [number, number];
}): boolean => {
	const { island, coordinates } = data;
	const [x, y] = coordinates;
	const islandWidth = island[0].length;
	const islandHeight = island.length;
	return x >= 0 && x < islandWidth && y >= 0 && y < islandHeight;
};
