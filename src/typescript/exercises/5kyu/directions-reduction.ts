//* https://www.codewars.com/kata/550f22f4d758534c1100025a/train/typescript

export type Direction = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';
const oppositeDirections: { [key in Direction]: Direction } = {
	NORTH: 'SOUTH',
	SOUTH: 'NORTH',
	EAST: 'WEST',
	WEST: 'EAST',
};

export function dirReduc(route: string[]): Direction[] {
	let result = [...route] as Direction[];
	for (let i = 0; i < result.length; i++) {
		const current = result[i];
		const next = result[i + 1];
		if (next === oppositeDirections[current]) {
			result.splice(i, 2);
			i = -1;
		}
	}
	return result;
}
