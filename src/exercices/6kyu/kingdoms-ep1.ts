//* https://www.codewars.com/kata/6138ee916cb50f00227648d9

export function joust(
	listField: string[],
	vKnightLeft: number,
	vKnightRight: number
): string[] {
	if (vKnightLeft === 0 && vKnightRight === 0) return listField;
	const knightLeft = listField[0].trim();
	const knightRight = listField[1].trim();
	const knightSize = knightLeft.length;
	const sizeField = listField[0].length;
	let collision = false;
	let knightLeftPosition = 0;
	let knightRightPosition = sizeField;
	while (!collision) {
		console.log({
			collision,
			knightLeftPosition,
			knightSize,
			knightRightPosition,
		});
		if (knightLeftPosition + knightSize >= knightRightPosition - knightSize)
			collision = true;
		else {
			knightLeftPosition += vKnightLeft;
			knightRightPosition -= vKnightRight;
		}
	}
	// const result = [
	// 	knightLeft
	// 		.padStart(knightLeftPosition, ' ')
	// 		.padEnd(sizeField - knightSize - knightLeftPosition, ' '),
	// 	knightRight
	// 		.padStart(knightRightPosition - knightSize, ' ')
	// 		.padEnd(sizeField - knightRightPosition, ' '),
	// ];
	// const result = [
	// 	' '.repeat(knightLeftPosition) + knightLeft + ' '.repeat(sizeField - knightLeftPosition - knightSize),
	// 	' '.repeat(knightRightPosition - knightSize) + knightRight + ' '.repeat(sizeField - knightRightPosition - knightSize),
	// ];
	console.log({
		knightLeftPosition,
		knightRightPosition,
		sizeField,
		knightSize,
	});
	const result = [
		' '.repeat(knightLeftPosition) +
			knightLeft +
			' '.repeat(sizeField - knightLeftPosition - knightSize),
		' '.repeat(knightRightPosition - knightSize) +
			knightRight +
			' '.repeat(sizeField - knightRightPosition),
	];

	console.log(result);

	return result;
}
