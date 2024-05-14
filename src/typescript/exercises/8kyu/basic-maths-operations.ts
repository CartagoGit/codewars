//* https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/typescript

export function basicOp(operation: string, a: number, b: number): number {
	const operations: Record<string, number> = {
		'+': a + b,
		'-': a - b,
		'*': a * b,
		'/': a / b,
	};
	return operations[operation];
}
