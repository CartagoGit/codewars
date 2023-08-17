//* https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/typescript

export function solve(chain: string): string {
	const upper = (chain.match(/[A-Z]/g) || []).length;
	const lower = (chain.match(/[a-z]/g) || []).length;
	return upper > lower ? chain.toUpperCase() : chain.toLowerCase();
}
