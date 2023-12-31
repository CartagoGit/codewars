// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/typescript

export function generateShape(int: number): string {
	let chain = '';
	for (let i = 0; i < int; i++) {
		chain += '+'.repeat(int);
		if (i < int - 1) chain += '\n';
	}
	return chain;
}
