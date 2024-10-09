//* https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/typescript

export function reverseWords(str: string): string {
	return str.split(' ').reverse().join(' ');
}
