//* https://www.codewars.com/kata/5853213063adbd1b9b0000be/train/typescript

type Move = 'down' | 'up' | 'right' | 'left';
interface Position {
	x: number;
	y: number;
}

export function streetFighterSelection(
	fighters: string[][],
	position: number[],
	moves: Move[]
) {
	console.log({ fighters, position, moves });
	const xLimit = fighters[0].length - 1;
	const yLimit = fighters.length - 1;
	const awayLimit = (data: { kind: 'x' | 'y'; next: number }) => {
		const { kind, next } = data;
		const limit = kind === 'x' ? xLimit : yLimit;
		const actualPosition = position[kind === 'x' ? 0 : 1];
		if (actualPosition + next > limit) return 0;
		else if (actualPosition + next < 0) return limit;
		else return actualPosition + next;
	};
	const newPosition: Record<Move, Position> = {
		up: { x: position[0], y: awayLimit({ kind: 'y', next: -1 }) },
		down: { x: position[0], y: awayLimit({ kind: 'y', next: 1 }) },
		left: { x: awayLimit({ kind: 'x', next: -1 }), y: position[1] },
		right: { x: awayLimit({ kind: 'x', next: 1 }), y: position[1] },
	};
	const result = moves.map((move) => {
		const { x, y } = newPosition[move];
		position = [x, y];
		return fighters[y][x];
	});
	return result;
}
