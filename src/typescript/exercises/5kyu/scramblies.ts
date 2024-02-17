//* https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/typescript

export function scramble(str1: string, str2: string): boolean {
	const charTimes: { [char: string]: number } = {};
	for (let char of str1) {
		charTimes[char] = (charTimes[char] || 0) + 1;
	}
	for (let char of str2) {
		if (!charTimes[char]) return false;
		charTimes[char]--;
	}
	return true;
}
