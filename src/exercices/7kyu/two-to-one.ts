//* https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/typescript

export const longest = (s1: string, s2: string): string =>
	Array.from(new Set([...s1, ...s2].sort())).join("");
