//* https://www.codewars.com/kata/585b1fafe08bae9988000314/train/typescript

export function explode(s: string): string {
	return s
		.split('')
		.map((digit, index) => digit.repeat(parseInt(digit)))
		.join('');
}
