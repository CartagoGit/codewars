//* https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/typescript

export const nbYear = (
	p0: number,
	percent: number,
	aug: number,
	p: number
): number => {
	let years = 0;
	while (p0 < p) {
		p0 += p0 * (percent / 100) + aug;
        p0 = Math.floor(p0);
		years++;
	}
	return years;
};
