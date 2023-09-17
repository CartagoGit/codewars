//* https://www.codewars.com/kata/5875b200d520904a04000003/train/typescript

export function enough(cap: number, on: number, wait: number): number {
	const canTake = cap - on - wait;
	return canTake < 0 ? Math.abs(canTake) : 0;
}
