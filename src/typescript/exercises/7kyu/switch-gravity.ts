//* https://www.codewars.com/kata/64c743cb0a2a00002856ff73/train/typescript

type Gravity = '-' | '#';

export function switchGravity(arr: Gravity[][]): Gravity[][] {
	let forceGravity: Gravity[][] = [];
	for (let row of arr) {
		for (let [indexCell, cell] of row.entries()) {
			if (cell !== '#') continue;
			let innerRow = 0;
			while (forceGravity?.[innerRow]?.[indexCell] === '#') {
				innerRow++;
			}
			if (!forceGravity[innerRow]) forceGravity[innerRow] = [];
			forceGravity[innerRow][indexCell] = '#';
		}
	}
	forceGravity = [...forceGravity].map((row) =>
		row.map((cell) => (cell === '#' ? cell : '-'))
	);
	console.log(forceGravity);
	return forceGravity;
    // REVIEW SIN TERMINAR
}
