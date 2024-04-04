//* https://www.codewars.com/kata/5865918c6b569962950002a1/train/typescript

export function strCount(str: string, letter: string): number {
	return str.split('').filter((l) => l.toLowerCase() === letter.toLowerCase())
		.length;
}
