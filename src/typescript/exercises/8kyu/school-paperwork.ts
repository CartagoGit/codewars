//* https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd

export function paperwork(n: number, m: number): number {
	return Math.min(n, m) < 0 ? 0 : n * m;
}
