//* https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/typescript

export function flip(dir: string, arr: number[]): number[] {
	return [...arr].sort((a, b) => (dir === 'R' ? a - b : b - a));
}
