//* https://www.codewars.com/kata/58223370aef9fc03fd000071/train/typescript

export function dashatize(num: number): string {
	const abdNum = Math.abs(num);
	let chainNum = abdNum.toString().split('');
	for (const [index, digit] of chainNum.entries()) {
		if (parseInt(digit) % 2 === 0) continue;
		const prevChar = index === 0 ? '' : '-';
		const lastChar = index === chainNum.length - 1 ? '' : '-';
		chainNum[index] = `${prevChar}${digit}${lastChar}`;
	}
	return chainNum.join('').replaceAll('--', '-');
}
