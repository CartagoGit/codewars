//* https://www.codewars.com/kata/61771d1cf1c7eb004b7329f0/train/typescript

interface Coordinates {
	x: number;
	y: number;
}

export function searchForFood(
	island: string[],
	coordinates: number[],
	steps: number
): number {
	const islandCoordinates = island.map((row, y) => {
		return row.split('');
	});
	const coordinatesXY = { y: coordinates[0], x: coordinates[1] };
	console.log({ island, coordinates, steps });
	const result = walk({
		island: islandCoordinates,
		coordinates: coordinatesXY,
		steps,
	});
	return result;
}

const walk = (data: {
	island: string[][];
	coordinates: Coordinates;
	steps: number;
}): number => {
	const { island, coordinates } = data;
	let { steps } = data;
	while (steps > 0) {
		const { top, right, bottom, left } = getBesides(coordinates);
		if (!isValidPosition({ island, coordinates: top })) continue;
		if (!isValidPosition({ island, coordinates: right })) continue;
		if (!isValidPosition({ island, coordinates: bottom })) continue;
		if (!isValidPosition({ island, coordinates: left })) continue;
		steps--;
	}
	let result = 0;
	return result;
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
	island: string[][];
	coordinates: Coordinates;
}): boolean => {
	const { island, coordinates } = data;
	const { x, y } = coordinates;
	const islandWidth = island[0].length;
	const islandHeight = island.length;
	return x >= 0 && x < islandWidth && y >= 0 && y < islandHeight;
};

const validBesides = (data: {
	island: string[][];
	coordinates: Coordinates;
}): {
	top: boolean;
	right: boolean;
	bottom: boolean;
	left: boolean;
} => {
	const { island, coordinates } = data;
	const { top, right, bottom, left } = getBesides(coordinates);
	return {
		top: isValidPosition({ island, coordinates: top }),
		right: isValidPosition({ island, coordinates: right }),
		bottom: isValidPosition({ island, coordinates: bottom }),
		left: isValidPosition({ island, coordinates: left }),
	};
};
