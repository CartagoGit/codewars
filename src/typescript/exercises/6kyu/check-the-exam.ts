//* https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/typescript

export function checkExam(array1: string[], array2: string[]): number {
	let score = 0;
	for (let i = 0; i < array1.length; i++) {
		if (array1[i] === array2[i]) score += 4;
		else if (array2[i] !== '') score -= 1;
	}
	return score < 0 ? 0 : score;
}
