//* https://www.codewars.com/kata/51f41b98e8f176e70d0002a8/train/typescript

export function sortMe(names: string[]): string[] {
	return names.sort((a, b) => a.localeCompare(b));
}
