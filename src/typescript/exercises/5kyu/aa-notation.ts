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
	console.log({ startNum });
	const finalNum = int + dec;
	const result = (finalNum ? sign : '') + finalNum + getLetters(exp);
	console.log({ result });
	return result;
}

const getLetters = (exp: number) => {
	const initLetters = ['', 'K', 'M', 'B', 'T'];
	if (exp <= 4) return initLetters[exp];
	exp -= 4;
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const sizeAlphabet = alphabet.length;
	// const mod = (exp % sizeAlphabet) - 1;
	const alphabetTimes = Math.floor(exp / sizeAlphabet);
	const numLetters = alphabetTimes % sizeAlphabet;
	let letters: string[] = [];
	for (let i = 0; i <= numLetters; i++) {
		const position = (exp % sizeAlphabet) - 1;
		console.log({ position, letter: alphabet[position] });
		letters.unshift(alphabet[position]);
	}
	if (numLetters === 0) letters.unshift(alphabet[0]);
	console.log({ exp, sizeAlphabet, letters, alphabetTimes, numLetters });
	return letters.join('');
};
