//* https://www.codewars.com/kata/570523c146edc287a50014b1/train/typescript

export const numberJoy = (n: number): boolean => {
	const sum = n
		.toString()
		.split('')
		.reduce((acc, curr) => acc + parseInt(curr), 0);
	const reverse = parseInt(sum.toString().split('').reverse().join(''), 0);
	return sum * reverse === n;
};
