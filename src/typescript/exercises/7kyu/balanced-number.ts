//* https://www.codewars.com/kata/5a4e3782880385ba68000018/train/typescript

export function balancedNum(number: number): string {
	const numStr = number.toString();
	const [leftNums, rightNums] =
		numStr.length % 2 === 0
			? [
					numStr.slice(0, numStr.length / 2 - 1),
					numStr.slice(numStr.length / 2 + 1),
			  ]
			: [
					numStr.slice(0, Math.floor(numStr.length / 2)),
					numStr.slice(Math.ceil(numStr.length / 2)),
			  ];
	return [...leftNums].reduce((acc, curr) => acc + parseInt(curr), 0) ===
		[...rightNums].reduce((acc, curr) => acc + parseInt(curr), 0)
		? 'Balanced'
		: 'Not Balanced';
}
