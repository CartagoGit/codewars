//* https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/typescript

export function beeramid(bonus: number, price: number): number {
	let beers = Math.floor(bonus / price);
	let level = 0;
	while (true) {
		if (beers < Math.pow(level + 1, 2)) break;
		beers -= Math.pow(level + 1, 2);
		level++;
	}
	return level;
}
