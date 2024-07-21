//* https://www.codewars.com/kata/580878d5d27b84b64c000b51/train/typescript

export function sumTriangularNumbers(n: number): number {
	let trinagularNums: number[] = [];
	for (let i = 0; i <= n; i++) {
		trinagularNums.push((i * (i + 1)) / 2);
	}
	return trinagularNums.reduce((acc, curr) => acc + curr, 0);
}
