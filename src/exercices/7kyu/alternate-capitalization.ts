//* https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/typescript

export function capitalize(text: string): [string, string] {
	let evenArray = [];
	let oddArray = [];
	for (let i = 0; i < text.length; i++) {
		if (i % 2 === 0) {
			evenArray.push(text[i].toUpperCase());
			oddArray.push(text[i].toLowerCase());
		} else {
			evenArray.push(text[i].toLowerCase());
			oddArray.push(text[i].toUpperCase());
		}
	}
    return [evenArray.join(''), oddArray.join('')];
}
