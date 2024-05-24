//* https://www.codewars.com/kata/58845a92bd573378f4000035/train/typescript

export function swapAdjacentBits(n: number): number {
	let binaryString = n.toString(2).padStart(32, '0');
	for (let i = 0; i < binaryString.length - 1; i += 2) {
		const temp = binaryString[i];
		binaryString =
			binaryString.slice(0, i) +
			binaryString[i + 1] +
			temp +
			binaryString.slice(i + 2);
	}
	return parseInt(binaryString, 2);
}
