//* https://www.codewars.com/kata/59f44c7bd4b36946fd000052/train/typescript

export function hist(chain: string): string {
	const charErrors = ['u', 'w', 'x', 'z'];
	const charErrorCounts = charErrors.map((char) => {
		const regex = new RegExp(char, 'g');
		return { char, num: (chain.match(regex) || []).length };
	});
	return charErrorCounts
		.filter(({ num }) => num > 0)
		.map(
			({ char, num }) =>
				`${char}${' '.repeat(2)}${num}${' '.repeat(
					6 - num.toString().length
				)}${'*'.repeat(num)}`
		)
		.join('\r');
}
