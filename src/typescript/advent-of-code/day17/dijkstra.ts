import { INPUT_EXAMPLE_17 } from './input';

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
	const queue: Vertex[] = [
		{
			...start,
			steps: 0,
			lastSide: 'none',
			heat: lavaMap[start.y][start.x],
			lowestHeat: lavaMap[start.y][start.x],
		},
	];
	let possibilities: number[] = [];

	while (queue.length > 0) {
		const current = queue.shift()!;
		const neighbors = getNeighbors(current);
		for (const neighbor of neighbors) {
			if (neighbor.x === end.x && neighbor.y === end.y) {
				possibilities.push(neighbor.lowestHeat);
				continue;
			}
			queue.push(neighbor);
		}
	}
	return Math.min(...possibilities);
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
		const newPosition: Omit<{ [key in Direction]: Position }, 'none'> = {
			up: { x: 0, y: -1 },
			down: { x: 0, y: 1 },
			left: { x: -1, y: 0 },
			right: { x: 1, y: 0 },
		};
		const newDirection = newPosition[direction];
		if (!isValidDirection({ neighbor: newDirection })) continue;
		const newNeighbor = {
			...newPosition[direction],
			lastSide: direction,
			steps: current.lastSide === direction ? current.steps + 1 : 1,
			heat: lavaMap[newDirection.y][newDirection.x],
			lowestHeat:
				current.lowestHeat + lavaMap[newDirection.y][newDirection.x],
		};
		if (newNeighbor.steps > 3) continue;

		neighbors.push(newNeighbor);
	}
	return neighbors;
};

const isValidDirection = (data: { neighbor: Position }): boolean => {
	const { neighbor } = data;
	return (
		neighbor.x >= 0 &&
		neighbor.x < lavaMap[0].length &&
		neighbor.y >= 0 &&
		neighbor.y < lavaMap.length
	);
};
