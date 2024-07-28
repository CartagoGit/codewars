//* https://www.codewars.com/kata/53697be005f803751e0015aa/train/typescript

const vowels = ['a', 'e', 'i', 'o', 'u'];

// turn vowels into numbers
export function encode(string: string): string {
	return string
		.split('')
		.map((char) =>
			vowels.includes(char) ? vowels.indexOf(char) + 1 : char
		)
		.join('');
}

// turn numbers back into vowels
export function decode(string: string): string {
	return string
        .split('')
        .map((char) =>
            parseInt(char) ? vowels[parseInt(char) - 1] : char
        )
        .join('');
}
