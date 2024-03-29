//* https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/typescript

export function revRot(str: string, sz: number): string {
	console.log({ str, sz });
	if (sz <= 0 || !str || sz > str.length) return '';
	let chunks = [];
	for (let i = 0; i < str.length; i += sz) {
		if (i > str.length - sz) break;
		const chunk = str.slice(i, i + sz);

		const isCubeSumsDivisibleForTwo =
			chunk.split('').reduce((act, val) => act + Number(val) ** 3, 0) %
				2 ===
			0;
		chunks.push(
			isCubeSumsDivisibleForTwo
				? chunk.split('').reverse().join('')
				: chunk.slice(1) + chunk[0]
		);
	}
	return chunks.join('');
}
