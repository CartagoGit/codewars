//* https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/typescript

export const number = (busStops: [number, number][]): number =>
	busStops.reduce((curr, [on, off]) => curr + on - off, 0);
