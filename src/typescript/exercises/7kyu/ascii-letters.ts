//* https://www.codewars.com/kata/589ebcb9926baae92e000001/train/typescript

export function convert(chain: string): string {
	const asciiChars: string[] = chain.split(/(.{2})/).map((char) => {
		if (!char) return '';
		const num = parseInt(char.trim(), 10);
		return num >= 32 && num <= 126 ? String.fromCharCode(num) : ' ';
	});
	return asciiChars.join('');
}
