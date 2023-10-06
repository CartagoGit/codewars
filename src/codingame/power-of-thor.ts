//* https://www.codingame.com/ide/puzzle/power-of-thor-episode-1

import { readline } from './helpers/global';

type Direction = 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW';
type PossibleMovement = Direction | '';
type Coordinates = { x: number; y: number };
const inputs: string[] = readline().split(' ');
const light: Coordinates = {
	x: parseInt(inputs[0]),
	y: parseInt(inputs[1]),
};
const thor: Coordinates = {
	x: parseInt(inputs[2]),
	y: parseInt(inputs[3]),
};

const movements: Record<Direction, Coordinates> = {
	N: { x: 0, y: -1 },
	NE: { x: 1, y: -1 },
	E: { x: 1, y: 0 },
	SE: { x: 1, y: 1 },
	S: { x: 0, y: 1 },
	SW: { x: -1, y: 1 },
	W: { x: -1, y: 0 },
	NW: { x: -1, y: -1 },
};

const size: Coordinates = {
	x: 40,
	y: 18,
};

while (true) {
	const remainingTurns: number = parseInt(readline());
	let result: string = '';
	while (thor.x !== light.x || thor.y !== light.y) {
		const directionY: PossibleMovement =
			thor.y === light.y ? '' : thor.y > light.y ? 'N' : 'S';
		const directionX: PossibleMovement =
			thor.x === light.x ? '' : thor.x > light.x ? 'W' : 'E';
	}
	console.log('SE');
}
