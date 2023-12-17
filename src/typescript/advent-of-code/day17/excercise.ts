import { INPUT_DAY_17, INPUT_EXAMPLE_17 } from './input';

//!! INIT
export const initDay17 = (): number => {
	// return getClumsyCrucible(INPUT_DAY_17);
	return getClumsyCrucible(INPUT_EXAMPLE_17);
};

interface Position {
	x: number;
	y: number;
}

type Vertex = Position & {
	lostHeat: number;
	prev?: Vertex;
	timesSameDirection: number;
};

const directions = ['up', 'down', 'left', 'right', 'none'] as const;
type Direction = (typeof directions)[number];

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

	// const path = aStar({ initialPosition, endPosition });
	// const result = getLostHeat({ path });
	// return result;
    return 0
};

const dijkstra = (data: {
    initialPosition: Position;
    endPosition: Position;
}) => {
    const { initialPosition, endPosition } = data;
   
}

// const aStar = (data: {
// 	initialPosition: Position;
// 	endPosition: Position;
// }): Vertex[] => {
// 	const { initialPosition, endPosition } = data;
// 	let openList: Vertex[] = [];
// 	let closedList: Vertex[] = [];
// 	openList.push({
// 		x: initialPosition.x,
// 		y: initialPosition.y,
// 		lostHeat: 0,
// 		timesSameDirection: 0,
// 	});

// 	while (openList.length > 0) {
// 		openList.sort((a, b) => a.lostHeat - b.lostHeat);
// 		// openList.sort((a, b) => b.lostHeat - a.lostHeat);
// 		let current = openList.shift() as Vertex;
// 		closedList.push(current);

// 		if (current.x === endPosition.x && current.y === endPosition.y) {
// 			let path = [];
// 			while (current.prev) {
// 				path.unshift(current);
// 				current = current.prev;
// 			}
// 			return path;
// 		}

// 		let neighbors = getNeighbors(current);
// 		for (let neighbor of neighbors) {
// 			if (
// 				!isInLavaMap({ vertex: neighbor, lavaMap }) ||
// 				lavaMap[neighbor.y][neighbor.x] === 1 ||
// 				isInList({ vertex: neighbor, list: closedList })
// 			) {
// 				continue;
// 			}
// 			// neighbor.lostHeat =
// 			// 	current.lostHeat +
// 			// 	1 +
// 			// 	heuristic({ vertex: neighbor, end: endPosition });
// 			neighbor.prev = current;

// 			if (!isInList({ vertex: neighbor, list: openList })) {
// 				openList.push(neighbor);
// 			}
// 		}
// 	}
// 	return [];
// };

const isInList = (data: { vertex: Vertex; list: Vertex[] }): boolean => {
	const { vertex, list } = data;
	for (let element of list) {
		if (element.x === vertex.x && element.y === vertex.y) {
			return true;
		}
	}
	return false;
};

const getLastDirection = (data: {
	prev: Vertex | undefined;
	current: Vertex;
}): Direction => {
	const { prev, current } = data;
	if (!prev) return 'none';
	if (current.x === prev.x) {
		return current.y > prev.y ? 'down' : 'up';
	} else {
		return current.x > prev.x ? 'right' : 'left';
	}
};

const isInLavaMap = (data: {
	vertex: Vertex;
	lavaMap: number[][];
}): boolean => {
	const { vertex, lavaMap } = data;
	if (
		vertex.x < 0 ||
		vertex.x >= lavaMap[0].length ||
		vertex.y < 0 ||
		vertex.y >= lavaMap.length
	) {
		return false;
	}
	return true;
};

// const heuristic = (data: { vertex: Vertex; end: Position }): number => {
// 	const { vertex, end } = data;
// 	let dx = Math.abs(vertex.x - end.x);
// 	let dy = Math.abs(vertex.y - end.y);
// 	return dx + dy;
// };

// const getNeighbors = (vertex: Vertex): Vertex[] => {
// 	const lastDirection = getLastDirection({
// 		prev: vertex.prev,
// 		current: vertex,
// 	});
// 	const neighbors = [];
// 	for (let direction of directions) {
// 		if (direction === 'none') continue;
// 		let { timesSameDirection } = vertex;
// 		console.log({ direction, lastDirection, timesSameDirection });
// 		if (direction === lastDirection) timesSameDirection++;
// 		else timesSameDirection = 0;
// 		if (timesSameDirection > 3) continue;
// 		const newNeighbor = {
// 			// lostHeat: getLostHeat({ path: [vertex] }),
// 			lostHeat: lavaMap[vertex.y][vertex.x],
// 			timesSameDirection,
// 			prev: vertex,
// 		};
// 		const newPosition: Omit<Record<Direction, Position>, 'none'> = {
// 			up: { x: vertex.x, y: vertex.y - 1 },
// 			down: { x: vertex.x, y: vertex.y + 1 },
// 			left: { x: vertex.x - 1, y: vertex.y },
// 			right: { x: vertex.x + 1, y: vertex.y },
// 		};

// 		neighbors.push({ ...newNeighbor, ...newPosition[direction] });
// 	}
// 	return neighbors;
// };

const getLostHeat = (data: { path: Vertex[] }): number => {
	const { path } = data;
	let lostHeat = 0;
	for (let vertex of path) {
		lostHeat += lavaMap[vertex.y][vertex.x];
        console.log(getLastDirection({ prev: vertex.prev, current: vertex }));
	}
    lostHeat += lavaMap[path[path.length - 1].y][path[path.length - 1].x];
	return lostHeat;
};
