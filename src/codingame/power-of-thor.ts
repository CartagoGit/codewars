//* https://www.codingame.com/ide/puzzle/power-of-thor-episode-1

import { readline } from './helpers/global';

type Movement = 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW';
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

while (true) {
	const remainingTurns: number = parseInt(readline());
	let direction: Movement | '' = '';
	if (thor.y !== light.y) {
		direction += thor.y < light.y ? 'S' : 'N';
		thor.y += thor.y < light.y ? 1 : -1;
	}
	if (thor.x !== light.x) {
		direction += thor.x < light.x ? 'E' : 'W';
		thor.x += thor.x < light.x ? 1 : -1;
	}
	console.log(direction.trim());
}
