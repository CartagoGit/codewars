//* https://www.codewars.com/kata/6138ee916cb50f00227648d9

export function joust(
	listField: string[],
	vKnightLeft: number,
	vKnightRight: number
): string[] {
	const knightLeft = listField[0].trim();
	const knightRight = listField[1].trim();
	const knightSize = knightLeft.length;
	const sizeField = listField[0].length;
	let collision = false;
	let knightLeftPosition = 0;
	let knightRightPosition = sizeField - 1;
	let walked = 0;
	while (!collision) {
		knightLeftPosition += vKnightLeft;
		knightRightPosition -= vKnightRight;
		if (knightLeftPosition + knightSize >= knightRightPosition - knightSize)
			collision = true;
		else walked++;
	}
	const leftWalked = walked * vKnightLeft;
	const rightWalked = walked * vKnightRight;
	const result = [
		knightLeft
			.padStart(leftWalked, ' ')
			.padEnd(sizeField - knightSize - leftWalked, ' '),
		knightRight
			.padEnd(rightWalked, ' ')
			.padStart(sizeField - knightSize - rightWalked, ' '),
	];

	return result;
}
