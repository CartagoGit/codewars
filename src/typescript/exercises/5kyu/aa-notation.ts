//* https://www.codewars.com/kata/64e4cdd7f2bfcd142a880011/train/typescript

export function formatNumber(startNum: number): string {
	const sign = startNum < 0 ? '-' : '';
	const cap = Math.pow(10, 3);
	let num = Math.abs(startNum);
	let exp = 0;
	while (num >= cap) {
		exp++;
		num /= cap;
	}
	const int = Math.floor(num);
	const intLength = 3 - int.toString().length;
	const decLength = Math.pow(10, intLength);
	const dec = decLength
		? Math.floor((num - int) * decLength) / decLength // rounded
		: 0;
	const result = sign + (int + dec) + getLetters(exp);
	console.log({ result });
	return result;
}

const getLetters = (exp: number) => {
	const initLetters = ['', 'K', 'M', 'B', 'T'];
	if (exp <= 4) return initLetters[exp];
	exp -= 4;
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const sizeAlphabet = alphabet.length;
	let letters: string[] = [alphabet[0], alphabet[0]];
	const mod = exp % sizeAlphabet - 1;
	const times = Math.floor(exp / sizeAlphabet);
console.log({exp, sizeAlphabet, letters, mod, times});
	return 'algo';
};
