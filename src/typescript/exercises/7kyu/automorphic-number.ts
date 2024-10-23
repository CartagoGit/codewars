//* https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/typescript

export function automorphic(n: number): string {
	const square = Math.pow(n, 2);
	const squareStr = square.toString();
	const nStr = n.toString();
	const isAutomorphic = squareStr.endsWith(nStr);
	return isAutomorphic ? 'Automorphic' : 'Not!!';
}
