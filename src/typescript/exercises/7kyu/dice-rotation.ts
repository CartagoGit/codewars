//*^https://www.codewars.com/kata/5ff2093d375dca00170057bc/train/typescript


export function rotations(dieArray: number[]): number {
	const counter: number[] = [];
	const uniqueValues = [...new Set(dieArray)];
	for (let face of uniqueValues) {
		let counterFace = 0;
		for (let value of dieArray) {
			if (face !== value) counterFace += face + value === 7 ? 2 : 1;
		}
		counter.push(counterFace);
	}
	return Math.min(...counter) ?? 0;
}
