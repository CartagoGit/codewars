//* https://www.codewars.com/kata/563fb342f47611dae800003c/train/typescript

export function trim(str: string, size: number): string {
	if (str.length <= size) return str;
	if (size <= 3) return str.slice(0, size) + '.'.repeat(3);
	return str.slice(0, size - 3) + '.'.repeat(3);
}
