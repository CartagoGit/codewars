//* https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/typescript

export function findNeedle(haystack: any[]): string {
	const index = haystack.findIndex((item) => item === "needle");
	return `found the needle at position ${index}`;
}
