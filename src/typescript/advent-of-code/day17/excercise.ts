import { INPUT_DAY_17, INPUT_EXAMPLE_17 } from './input';

interface Position {
	row: number;
	col: number;
}

type Direction = 'up' | 'down' | 'left' | 'right';

const possibleDirections = ['up', 'down', 'left', 'right'] as const;

export const initDay17 = (): number => {
	// return getClumsyCrucible(INPUT_DAY_17);
	return getClumsyCrucible(INPUT_EXAMPLE_17);
};

const getClumsyCrucible = (input: string): number => {
	const lavaPool: number[][] = input.split('\n').map((line) =>
		line
			.trim()
			.split('')
			.map((char) => Number(char))
	);
	const initPosition: Position = { row: 0, col: 0 };
	const finishPosition: Position = {
		row: lavaPool.length - 1,
		col: lavaPool[0].length - 1,
	};


	const coldestPath = findColdestPath({
		lavaPool,
		actualPosition: initPosition,
		finishPosition,
		totalHeat: 0,
		timesSameDirection: 0,
	});
	return Math.min(...coldestPath);
};

const findColdestPath = (data: {
	lavaPool: number[][];
	actualPosition: Position;
	finishPosition: Position;
	totalHeat: number;
	timesSameDirection: number;
	lastDirection?: Direction | undefined;
}): number[] => {
	const {
		lavaPool,
		actualPosition,
		finishPosition,
		totalHeat,
		lastDirection,
		timesSameDirection,
	} = data;
    console.log({actualPosition, finishPosition, totalHeat, lastDirection, timesSameDirection});
	const possiblePaths: number[] = [];
	for (let direction of possibleDirections) {
      
		if (
			!canWalk({
				position: actualPosition,
				nextDirection: direction,
				lastDirection,
				finishPosition,
				timesSameDirection,
			})
		) {
			continue;
		}
		const nextPosition = walk({ position: actualPosition, direction });
		if (nextPosition === finishPosition) {
			possiblePaths.push(
				totalHeat + lavaPool[nextPosition.row][nextPosition.col]
			);
			continue;
		}
		const nextData = {
			lavaPool,
			actualPosition: nextPosition,
			finishPosition,
			totalHeat: totalHeat + lavaPool[nextPosition.row][nextPosition.col],
			lastDirection: direction,
			timesSameDirection:
				direction === lastDirection ? timesSameDirection + 1 : 0,
		};
		possiblePaths.push(...findColdestPath(nextData));
	}
    
	return possiblePaths;
};

const canWalk = (data: {
	position: Position;
	nextDirection: Direction;
	lastDirection: Direction | undefined;
	finishPosition: Position;
	timesSameDirection: number;
}): boolean => {
	const maxSameDirection = 3;
	const {
		position,
		nextDirection,
		lastDirection,
		finishPosition,
		timesSameDirection,
	} = data;
	const impossibleDirections: Record<Direction, Direction> = {
		up: 'down',
		down: 'up',
		left: 'right',
		right: 'left',
	};
	if (
		(!!lastDirection &&
			nextDirection === impossibleDirections[lastDirection]) ||
		(nextDirection === lastDirection &&
			timesSameDirection + 1 > maxSameDirection)
	) {
		return false;
	}

	const nextPosition = walk({ position, direction: nextDirection });
	if (
		nextPosition.row < 0 ||
		nextPosition.col < 0 ||
		nextPosition.row > finishPosition.row ||
		nextPosition.col > finishPosition.col
	) {
		return false;
	}
	return true;
};

const walk = (data: { position: Position; direction: Direction }) => {
	const { position, direction } = data;
	const possibilities: Record<Direction, Position> = {
		up: { row: position.row - 1, col: position.col },
		down: { row: position.row + 1, col: position.col },
		left: { row: position.row, col: position.col - 1 },
		right: { row: position.row, col: position.col + 1 },
	};
	return possibilities[direction];
};
