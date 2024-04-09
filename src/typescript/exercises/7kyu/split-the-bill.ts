//* https://www.codewars.com/kata/5641275f07335295f10000d0/train/typescript

export function splitTheBill(x: { [k: string]: number }): {
	[k: string]: number;
} {
	const sum = Object.values(x).reduce((a, b) => a + b, 0);
	const avg = sum / Object.keys(x).length;
	let reciveMoney = {} as { [k: string]: number };
	for (let key in x) {
		reciveMoney[key] = +(x[key] - avg).toFixed(2);
	}
	return reciveMoney;
}
