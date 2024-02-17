//* https://www.codewars.com/kata/57f759bb664021a30300007d/train/typescript

export const switcheroo = (text: string): string =>
	text.split('').map((char) => (char === 'a' ? 'b' : char === 'b' ? 'a' : char)).join('');
