//* https://www.codewars.com/kata/5853213063adbd1b9b0000be/train/typescript

type Move = 'down' | 'up' | 'right' | 'left';
interface Position {
	x: number;
	y: number;
}

export function streetFighterSelection(
	fighters: string[][],
	coordinates: number[],
	moves: Move[]
) {
    let position = {
        x : coordinates[1],
        y : coordinates[0]
    }
	console.log({ fighters, position, moves, coordinates });
	const xLimit = fighters[0].length - 1;
	const yLimit = fighters.length - 1;
	const awayLimit = (data: {
		kind: 'x' | 'y';
		next: number;
		actualPosition: Position;
	}) => {
		const { kind, next, actualPosition } = data;
		const limit = kind === 'x' ? xLimit : yLimit;
		const kindPosition = actualPosition[kind];
		if (kindPosition + next > limit) return kind === 'x' ? 0 : limit;
		else if (kindPosition + next < 0) return kind === 'x' ? limit : 0;
		else return kindPosition + next;
	};
	const newPosition: Record<Move, (actualPosition: Position) => Position> = {
		up: (actualPosition: Position) => ({
			x: position.x,
			y: awayLimit({ kind: 'y', next: -1, actualPosition }),
		}),
		down: (actualPosition: Position) => ({
			x: position.x,
			y: awayLimit({ kind: 'y', next: 1, actualPosition }),
		}),
		right: (actualPosition: Position) => ({
			x: awayLimit({ kind: 'x', next: 1, actualPosition }),
			y: position.y,
		}),
		left: (actualPosition: Position) => ({
			x: awayLimit({ kind: 'x', next: -1, actualPosition }),
			y: position.y,
		}),
	};
	const result = moves.map((move) => {
		const { x, y } = newPosition[move](position);
		position = { x, y };
		return fighters[y][x];
	});
	return result;
}


