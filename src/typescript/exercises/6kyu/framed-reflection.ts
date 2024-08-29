
//* https://www.codewars.com/kata/581331293788bc1702001fa6/train/typescript

export function mirror(text: string): string {
	const words = text.split(' ');
	const reversedWords = words.map((word) => word.split('').reverse().join(''));
	const maxLength = Math.max(...words.map((word) => word.length));
    const spacedReversedWords = reversedWords.map((word) => `* ${word.padEnd(maxLength, ' ')} *`);
	const frame = '*'.repeat(maxLength + 4);
    return [frame, ...spacedReversedWords, frame].join('\n');
}
