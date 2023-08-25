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
		if (knightLeftPosition + knightSize > knightRightPosition - knightSize)
			collision = true;
		else {
			knightLeftPosition += vKnightLeft;
			knightRightPosition -= vKnightRight;
		}
	}

	const knightLeftFinalSpaces = sizeField - knightLeftPosition - knightSize;
	const knightRightStartSpaces = knightRightPosition - knightSize;
    const knightRightFinalSpaces = sizeField - knightRightPosition;
	const result = [
		' '.repeat(knightLeftPosition) +
			knightLeft +
			' '.repeat(knightLeftFinalSpaces),
		' '.repeat(knightRightStartSpaces) +
			knightRight +
			' '.repeat(knightRightFinalSpaces),
	];


	return result;
}
