import { reverse } from './../3kyu/reverse';
//* https://www.codewars.com/kata/581331293788bc1702001fa6/train/typescript

export function mirror(text: string): string {
	const words = text.split(' ');
	const reversedWords = words.map((word) => reverse(word));
	const maxLength = Math.max(...words.map((word) => word.length));
	const frame = '*'.repeat(maxLength + 4);
    return 'fail'
}
