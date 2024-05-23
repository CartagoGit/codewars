//* https://www.codewars.com/kata/592a6ad46d6c5a62b600003f/train/typescript
const baseCipher: Record<string, string> = {
	g: 'a',
	d: 'e',
	r: 'y',
	p: 'o',
	l: 'u',
	k: 'i',
};
const inverseCipher: Record<string, string> = {};
for (let key in baseCipher) {
	inverseCipher[baseCipher[key]] = key;
}
const cipher = { ...baseCipher, ...inverseCipher };

export const encode = (str: string): string => {
	return str
		.split('')
		.map((char: string) => {
			const converse = cipher[char.toLowerCase()] ?? char;
            return char === char.toLowerCase() ? converse : converse.toUpperCase();
		})
		.join('');
};

export const decode = encode;
