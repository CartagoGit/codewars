//* https://www.codewars.com/kata/605ae9e1d2be8a0023b494ed/train/typescript

export function countSalutes(hallway: String): number {
	const chars = hallway.split('');
	let counter = 0;
	for (let i = 0; i < chars.length; i++) {
		if (['-', '<'].includes(chars[i])) continue;
		const nextOposite = chars.filter(
			(char, index) => index > i && char === '<'
		).length;
		counter += nextOposite * 2;
	}
	return counter;
}
