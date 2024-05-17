//* https://www.codewars.com/kata/52dbae61ca039685460001ae/train/typescript

export function change(string: string): string {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let resultList = [];
	for (let i = 0; i < alphabet.length; i++) {
		if (string.toLowerCase().includes(alphabet[i])) resultList.push('1');
		else resultList.push('0');
	}
    return resultList.join('');
}
