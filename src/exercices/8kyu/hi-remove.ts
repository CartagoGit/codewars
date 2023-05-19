//* https://www.codewars.com/kata/57fae964d80daa229d000126/train/typescript

export const remove = (s: string): string =>
	s.endsWith("!") ? s.slice(0, -1) : s;
