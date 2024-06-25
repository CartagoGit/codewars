//* https://www.codewars.com/kata/5865cff66b5699883f0001aa/train/typescript

export function toTime(seconds: number): string {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	return `${hours} hour(s) and ${minutes} minute(s)`;
}
