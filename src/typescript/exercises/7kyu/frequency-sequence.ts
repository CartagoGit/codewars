//* https://www.codewars.com/kata/585a033e3a36cdc50a00011c/train/typescript

export function freqSeq(str: string, sep: string): string {
	const arrChain = str.split('');
	let freqMap = new Map<string, number>();
	for (let char of arrChain) {
		freqMap.set(char, (freqMap.get(char) ?? 0) + 1);
	}
	return arrChain.map((char) => freqMap.get(char)).join(sep);
}
