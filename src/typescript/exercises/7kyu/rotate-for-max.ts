// https://www.codewars.com/kata/56a4872cbb65f3a610000026/train/typescript

export function maxRot(n: number): number {
	let chain: string = n.toString();
	let results: number[] = [n];
	for (let i = 0; i < chain.length; i++) {
		const stable = chain.slice(0, i);
		const rest = chain.slice(i);
		chain = stable + rest.slice(1) + rest[0];

		results.push(Number(chain));
	}
	return Math.max(...results);
}
