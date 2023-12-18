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
	prev?: Vertex;
};

//!! INIT
export const initDay17 = (): number => {
	// return getClumsyCrucible(INPUT_DAY_17);
	return getClumsyCrucible(INPUT_EXAMPLE_17);
};

let lavaMap: number[][] = [];
let heatMap: number[][] = [];

const getClumsyCrucible = (input: string): number => {
	lavaMap = input.split('\n').map((line) =>
		line
			.trim()
			.split('')
			.map((char) => Number(char.trim()))
	);
	heatMap = new Array(lavaMap.length)
		.fill(-1)
		.map(() => new Array(lavaMap[0].length).fill(-1));
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
	visited[start.y][start.x] = true;
	const initVertex: Vertex = {
		...start,
		steps: 0,
		lastSide: 'none',
		heat: lavaMap[start.y][start.x],
		lowestHeat: lavaMap[start.y][start.x],
		prev: undefined,
	};
	let possibilities: Vertex[] = [];

	getPath({ end, current: initVertex, possibilities });
	const minHeat = Math.min(
		...possibilities.map((possibility) => possibility.lowestHeat)
	);
	return minHeat;
};

const getPath = (data: {
	end: Position;
	current: Vertex;
	possibilities: Vertex[];
}): void => {
	const { end, current, possibilities } = data;
	const stack = [{ current, possibilities }];
	while (stack.length > 0) {
		// console.log(stack.length);
		const { current, possibilities } = stack.shift()!;
		const neighbors = getNeighbors(current);
		Neighbor: for (const neighbor of neighbors) {
			if (neighbor.x === end.x && neighbor.y === end.y) {
				possibilities.push(neighbor);
				break Neighbor;
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
		heatMap[newPosition.y][newPosition.x] =
			current.lowestHeat + lavaMap[newPosition.y][newPosition.x];
		const newNeighbor = {
			...newPosition,
			prev: current,
			lastSide: direction,
			steps: current.lastSide === direction ? current.steps + 1 : 0,
			heat: lavaMap[newPosition.y][newPosition.x],
			lowestHeat:
				current.lowestHeat + lavaMap[newPosition.y][newPosition.x],
		};
		if (newNeighbor.steps > 3) continue;
		neighbors.push(newNeighbor);
	}
	return neighbors.sort((a, b) => a.lowestHeat - b.lowestHeat);
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
		(heatMap[newPosition.y][newPosition.x] === -1 ||
			heatMap[newPosition.y][newPosition.x] >
				current.lowestHeat + lavaMap[newPosition.y][newPosition.x])
	);
};
