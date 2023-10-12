//* https://www.codewars.com/kata/64e4cdd7f2bfcd142a880011/train/typescript

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const sizeAlphabet = alphabet.length;

export function formatNumber(startNum: number): string {
	if (startNum === 0) return '0';

	console.log('---->START', { startNum });
	const sign = startNum < 0 ? '-' : '';
	let num = Math.abs(startNum);
	const cap = Math.pow(10, 3);
	let exp = Math.floor(Math.log10(num) / 3) - 1;
	if (exp < 0) exp = 0;
	num /= Math.pow(cap, exp);
	if (cap <= num) {
		num /= cap;
		exp++;
	}

	console.log('AFTER', { num, chain: num.toString(), exp });
	const int = Math.floor(num);
	const intLength = 3 - int.toString().length;
	const decLength = Math.pow(10, intLength);
	const dec = decLength
		? Math.floor((num - int) * decLength) / decLength // rounded
		: 0;
	const finalNum = int + dec;
	const result = (finalNum ? sign : '') + finalNum + getLetters(exp);
	console.log('FINISH<------', { result, int, dec, finalNum });
	return result;
}

const getLetters = (exp: number) => {
	const initLetters = ['', 'K', 'M', 'B', 'T'];
	if (exp < 5) return initLetters[exp];
	exp -= 5;
	const result = getFromAlphabet(exp).join('');
	return result.length > 1 ? result : alphabet[0] + result;
};

const getFromAlphabet = (exp: number): string[] => {
	const alphabetRepeatedTimes = Math.floor(exp / sizeAlphabet);
	let letters: string[] = [];
	if (alphabetRepeatedTimes)
		letters.push(...getFromAlphabet(alphabetRepeatedTimes).flat());
	const position = exp % sizeAlphabet;
	letters.push(alphabet[position]);
	return letters;
};
