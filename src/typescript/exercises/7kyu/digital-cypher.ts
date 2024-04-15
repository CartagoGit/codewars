//* https://www.codewars.com/kata/592e830e043b99888600002d/train/typescript

export function encode(str: String, n: number): number[] {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const numLimit = n.toString().length;
	let result: number[] = [];
	for (let i = 0; i < str.length; i++) {
		const num = n.toString()[i % numLimit];
		const char = str[i].toLowerCase();
		result.push(alphabet.indexOf(char) + 1 + Number(num));
	}
	return result;
}
