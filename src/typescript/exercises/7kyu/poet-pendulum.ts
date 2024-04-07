//* https://www.codewars.com/kata/5bd776533a7e2720c40000e5/train/typescript

export function pendulum(values: number[]) {
	const arrOrder = values.sort((a, b) => a - b);
	let result: number[] = [];
	arrOrder.forEach((num, index) =>
		index % 2 === 0 ? result.unshift(num) : result.push(num)
	);
	return result;
}
