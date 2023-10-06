/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/

import { readline } from './helpers/global';


while (true) {
	let mountainsH: number[] = [];
	for (let i = 0; i < 8; i++) {
		const mountainH: number = parseInt(readline()); 
		mountainsH.push(mountainH);
	}
	console.log(mountainsH.indexOf(Math.max(...mountainsH))); 
}
