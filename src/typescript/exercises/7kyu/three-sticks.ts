//* https://www.codewars.com/kata/57c1f22d8fbb9fd88700009b/train/typescript

export function maxlen(l1: number, l2: number): number {
	const [min, max] = [Math.min(l1, l2), Math.max(l1, l2)];
	if (max / 3 > min) return max / 3;
	else if (max / 2 >= min) return min;
	else return max / 2;
}
