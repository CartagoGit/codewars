//* https://www.codewars.com/kata/5e2733f0e7432a000fb5ecc4/train/typescript

export function getFreeUrinals(ur: string): number {
	let counter = 0;
	for (let i = 0; i < ur.length; i++) {
		const [prev, current, next] = [ur[i - 1], ur[i], ur[i + 1]];
		if ([current, next].every((pos) => pos === '1')) return -1;
		if ([prev, current, next].some((pos) => pos === '1')) continue;
		counter++;
		i++;
	}
	return counter;
}
