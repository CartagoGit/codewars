//* https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/typescript

export function partsSums(ls: number[]): number[] {
    const sum = ls.reduce((acc, curr) => acc + curr, 0);
	const result: number[] = [sum];
	for (let i = 0; i < ls.length; i++) {
		const current = ls[i];
        result.push(result[i] - current);
	}
    return result;
}
