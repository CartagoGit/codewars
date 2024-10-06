//* https://www.codewars.com/kata/59b72376460387017e000062/train/typescript

export function isHollow(x: number[]): boolean {
	const [firstZero, lastZero] = [x.indexOf(0), x.lastIndexOf(0)];
	const finalDistance = x.length - lastZero - 1;
	const middle = x.slice(firstZero, lastZero + 1);
	return (
		middle.length >= 3 &&
		middle.every((num) => !num) &&
		finalDistance === firstZero
	);
}

const test = [1, 2, 0, 0, 0, 3, 4];
const test2 = [1, 0, 0, 0, 0, 3, 4];
console.log(isHollow(test)); // true

console.log(isHollow(test2)); // false
