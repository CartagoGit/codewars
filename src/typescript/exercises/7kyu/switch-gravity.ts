//* https://www.codewars.com/kata/64c743cb0a2a00002856ff73/train/typescript

type Gravity = '-' | '#';

export function switchGravity(arr: Gravity[][]): Gravity[][] {
	const forceGravity: Gravity[][] = [...arr].map((row) => row.map(() => '-'));
	for (let row of arr) {
		for (let [indexCell, cell] of row.entries()) {
			if (cell !== '#') continue;
			let innerRow = arr.length - 1;
			while (forceGravity[innerRow][indexCell] === '#') innerRow--;
			forceGravity[innerRow][indexCell] = '#';
		}
	}
	return forceGravity;
}

const test = switchGravity([
	['-', '#', '#', '-'],
	['-', '-', '-', '-'],
	['-', '-', '-', '-'],
	['-', '-', '-', '-'],
]);

console.log(test);
