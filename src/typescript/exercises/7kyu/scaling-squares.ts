//* https://www.codewars.com/kata/56ed20a2c4e5d69155000301/train/typescript

export const scale = (s: string, k: number, n: number): string => {
	if (!s) return '';
	const arr = s.split('\n');
	let resultArr: string[] = [];
	for (let line of arr) {
		let newLine: string = '';
		for (let char of line) {
			newLine += char.repeat(k);
		}
		for (let i = 0; i < n; i++) {
			resultArr.push(newLine);
		}
	}
	return resultArr.join('\n');
};
