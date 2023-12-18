import { INPUT_DAY_17, INPUT_EXAMPLE_17 } from './input';

interface Position {
	x: number;
	y: number;
}

const directionsArray = ['up', 'down', 'left', 'right', 'none'] as const;
type Direction = (typeof directionsArray)[number];

type Vertex = {
	x: number;
	y: number;
	lastSide: Direction;
	steps: number;
	heat: number;
	lowestHeat: number;
	visited: boolean[][];
	heatMap: number[][];
};

//!! INIT
export const initDay17 = (): number => {
	// return getClumsyCrucible(INPUT_DAY_17);
	return getClumsyCrucible(INPUT_EXAMPLE_17);
};

let lavaMap: number[][] = [];

const getClumsyCrucible = (input: string): number => {
	lavaMap = input.split('\n').map((line) =>
		line
			.trim()
			.split('')
			.map((char) => Number(char.trim()))
	);
	const initialPosition: Position = { x: 0, y: 0 };
	const endPosition: Position = {
		x: lavaMap[0].length - 1,
		y: lavaMap.length - 1,
	};

	const result = calculateHeat({ start: initialPosition, end: endPosition });

	return result;
};

const calculateHeat = (data: { start: Position; end: Position }) => {
	const { start, end } = data;
	const visited = new Array(lavaMap.length)
		.fill(false)
		.map(() => new Array(lavaMap[0].length).fill(false));
	const heatMap = new Array(lavaMap.length)
		.fill(false)
		.map(() => new Array(lavaMap[0].length).fill(-1));
	visited[start.y][start.x] = true;
	heatMap[start.y][start.x] = lavaMap[start.y][start.x];
	const initVertex: Vertex = {
		...start,
		steps: 0,
		lastSide: 'none',
		heat: lavaMap[start.y][start.x],
		lowestHeat: lavaMap[start.y][start.x],
		// lowestHeat: 0,
		heatMap,
		visited,
	};
	let possibilities: Vertex[] = [];

	getPath({ end, current: initVertex, possibilities });
    const minHeat = Math.min(
		...possibilities.map((possibility) => possibility.lowestHeat)
	);
    const vertex = possibilities.find((possibility) => possibility.lowestHeat === minHeat);
    console.log(vertex?.visited);
	return minHeat
};

// const getPath = (data: {
// 	end: Position;
// 	current: Vertex;
// 	possibilities: Vertex[];
// }): void => {
// 	const { end, current, possibilities } = data;
// 	const neighbors = getNeighbors(current);
// 	for (const neighbor of neighbors) {
// 		if (neighbor.x === end.x && neighbor.y === end.y) {
// 			possibilities.push(neighbor);
// 			continue;
// 		}
// 		getPath({ end, current: neighbor, possibilities });
// 	}
// };

const getPath = (data: {
	end: Position;
	current: Vertex;
	possibilities: Vertex[];
}): void => {
	const { end, current, possibilities } = data;
	const stack = [{ current, possibilities }];
	while (stack.length > 0) {
		const { current, possibilities } = stack.pop()!;
		const neighbors = getNeighbors(current);
		for (const neighbor of neighbors) {
			if (neighbor.x === end.x && neighbor.y === end.y) {
				possibilities.push(neighbor);
				break;
			}
			stack.push({ current: neighbor, possibilities });
		}
	}
};

const getNeighbors = (current: Vertex): Vertex[] => {
	let neighbors: Vertex[] = [];
	const inverseDirections: Omit<Record<Direction, Direction>, 'none'> = {
		up: 'down',
		down: 'up',
		left: 'right',
		right: 'left',
	};
	for (const direction of directionsArray) {
		if (
			direction === 'none' ||
			(current.lastSide !== 'none' &&
				inverseDirections[current.lastSide] === direction)
		) {
			continue;
		}

		const newPosition = getNewPosition({ current, direction });
		if (!isValidDirection({ newPosition, current })) continue;
		let visitedNeighbor = current.visited.map((row) => [...row]);
		visitedNeighbor[newPosition.y][newPosition.x] = true;

		current.heatMap[newPosition.y][newPosition.x] =
			current.lowestHeat + lavaMap[newPosition.y][newPosition.x];
		const newNeighbor = {
			...newPosition,
			lastSide: direction,
			steps: current.lastSide === direction ? current.steps + 1 : 0,
			heat: lavaMap[newPosition.y][newPosition.x],
			lowestHeat:
				current.lowestHeat + lavaMap[newPosition.y][newPosition.x],
			visited: visitedNeighbor,
			heatMap: current.heatMap,
		};
		if (newNeighbor.steps > 3) continue;
		neighbors.push(newNeighbor);
	}
	return neighbors;
};

const getNewPosition = (data: {
	current: Vertex;
	direction: Direction;
}): Position => {
	const { current, direction } = data;
	if (direction === 'none') throw 'Direction is none';
	const newPosition: Omit<{ [key in Direction]: Position }, 'none'> = {
		up: { x: 0, y: -1 },
		down: { x: 0, y: 1 },
		left: { x: -1, y: 0 },
		right: { x: 1, y: 0 },
	};
	return {
		x: current.x + newPosition[direction].x,
		y: current.y + newPosition[direction].y,
	};
};

const isValidDirection = (data: {
	newPosition: Position;
	current: Vertex;
}): boolean => {
	const { newPosition, current } = data;

	return (
		newPosition.x >= 0 &&
		newPosition.x < lavaMap[0].length &&
		newPosition.y >= 0 &&
		newPosition.y < lavaMap.length &&
		current.visited[newPosition.y][newPosition.x] === false &&
		(current.heatMap[newPosition.y][newPosition.x] === -1 ||
			current.heatMap[newPosition.y][newPosition.x] >
				current.lowestHeat + lavaMap[newPosition.y][newPosition.x])
	);
};
