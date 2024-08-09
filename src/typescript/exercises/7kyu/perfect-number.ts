//* https://www.codewars.com/kata/5a662a02e626c54e87000123/train/typescript

export function extraPerfect(n: number) {
	return Array.from({ length: n }, (_, i) => i + 1).filter(
		(el) => el % 2 !== 0
	);
}
