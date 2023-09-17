//* https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/typescript

export function cockroachSpeed(kmh: number): number {
	const ms = Math.floor((kmh * 100000) / 3600);
	return ms;
}
