import { INPUT_EXAMPLE_17 } from './input';

interface Position {
	x: number;
	y: number;
}

const directionsArray = ['up', 'down', 'left', 'right', 'none'] as const;
type Direction = (typeof directionsArray)[number];

// type Vertex = Position & {
// 	direction: Direction;
// 	countSameDirection: number;
// 	heat: number;
// 	prev?: Vertex;
// };

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

	const result = dijkstra(lavaMap, initialPosition, endPosition);

	return result;
};

type Node = {
	x: number;
	y: number;
	direction: Direction;
	steps: number;
};

const directions: (Position & { side: Direction })[] = [
	{ x: 0, y: -1, side: 'up' },
	{ x: 1, y: 0, side: 'right' },
	{ x: 0, y: 1, side: 'down' },
	{ x: -1, y: 0, side: 'left' },
];

function dijkstra(map: number[][], start: Position, end: Position) {
	const distance: number[][] = Array(map.length)
		.fill(Infinity)
		.map(() => Array(map[0].length).fill(Infinity));
	const queue: Node[] = [{ ...start, steps: 0, direction: 'none' }];

	distance[start.y][start.x] = 0;

	while (queue.length > 0) {
		const current = queue.shift()!;
		const currentDistance = distance[current.y][current.x];

		for (const direction of directions) {
			if (current.direction !== direction.side && current.steps === 3)
				continue;

			const newX = current.x + direction.x;
			const newY = current.y + direction.y;

			if (
				newX < 0 ||
				newY < 0 ||
				newX >= map[0].length ||
				newY >= map.length
			)
				continue;

			const newDistance = currentDistance + map[newY][newX];
			if (!(newDistance < distance[newY][newX])) continue;
			distance[newY][newX] = newDistance;
			queue.push({
				x: newX,
				y: newY,
				direction: direction.side,
				steps:
					current.direction === direction.side
						? current.steps + 1
						: 1,
			});
		}
	}

	return distance[end.y][end.x];
}

// function calculateHeat(data: { start: Position; end: Position }): number {
// 	const { start, end } = data;
// 	const rows = lavaMap.length;
// 	const cols = lavaMap[0].length;

// 	distances[start.x][start.y] = 0;

// 	const queue: Vertex[] = [
// 		{
// 			x: start.x,
// 			y: start.y,
// 			direction: 'none',
// 			countSameDirection: 1,
// 			heat: 0,
// 		},
// 	];

// 	while (queue.length > 0) {
// 		const current = queue.shift()!;

// 		if (current.x === end.x && current.y === end.y) {
// 			break;
// 		}

// 		const neighbors: Vertex[] = getNeighbors(current);

// 		for (const neighbor of neighbors) {
// 			if (!isValidNeighbor({ neighbor, rows, cols })) continue;
// 			if (
// 				current.direction === neighbor.direction &&
// 				current.countSameDirection < 4
// 			) {
// 				neighbor.countSameDirection = current.countSameDirection + 1;
// 			} else {
// 				neighbor.countSameDirection = 1;
// 			}
// 			if (neighbor.countSameDirection > 3) continue;

// 			const tentativeDistance =
// 				distances[current.x][current.y] +
// 				matrix[neighbor.x][neighbor.y];

// 			if (tentativeDistance < distances[neighbor.x][neighbor.y]) {
// 				distances[neighbor.x][neighbor.y] = tentativeDistance;

// 				queue.push(neighbor);
// 			}
// 		}
// 	}

// 	return distances[end.x][end.y];
// }

// const isValidNeighbor = (data: {
// 	neighbor: Vertex;
// 	rows: number;
// 	cols: number;
// }) => {
// 	const { neighbor, rows, cols } = data;
// 	return (
// 		neighbor.x >= 0 &&
// 		neighbor.x < rows &&
// 		neighbor.y >= 0 &&
// 		neighbor.y < cols
// 	);
// };

// const getNeighbors = (current: Vertex): Vertex[] => {
// 	return [
// 		{
// 			x: current.x - 1,
// 			y: current.y,
// 			direction: 'left',
// 			prev: current,
// 			countSameDirection: 0,
// 		},
// 		{
// 			x: current.x + 1,
// 			y: current.y,
// 			direction: 'right',
// 			prev: current,
// 			countSameDirection: 0,
// 		},
// 		{
// 			x: current.x,
// 			y: current.y - 1,
// 			direction: 'up',
// 			prev: current,
// 			countSameDirection: 0,
// 		},
// 		{
// 			x: current.x,
// 			y: current.y + 1,
// 			direction: 'down',
// 			prev: current,
// 			countSameDirection: 0,
// 		},
// 	];
// };
