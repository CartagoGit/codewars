//* https://www.codewars.com/kata/64e4cdd7f2bfcd142a880011/train/typescript

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const sizeAlphabet = alphabet.length;

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
	if (exp < 5) return initLetters[exp];
	exp -= 5;
	const result = getFromAlphabet(exp).join('');
	return result.length > 1 ? result : 'a' + result;
};

const getFromAlphabet = (exp: number): string[] => {
	const alphabetRepeatedTimes = Math.floor(exp / sizeAlphabet);
	let letters: string[] = [];
	if (alphabetRepeatedTimes)
		letters.push(...getFromAlphabet(alphabetRepeatedTimes));
	const position = exp % sizeAlphabet;
	letters.push(alphabet[position]);
	return letters;
};
