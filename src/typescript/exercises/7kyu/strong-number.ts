//* https://www.codewars.com/kata/5a4d303f880385399b000001/train/typescript

export const strongNumber = (num: number): string => {
	const nums = num.toString().split('').map(Number);
    const sum = nums.reduce((acc, curr) => acc + factorial(curr), 0);
	return sum === num ? 'STRONG!!!!' : 'Not Strong !!'
};

const factorial = (num: number): number => {
    if (num === 0) return 1;
    return num * factorial(num - 1);
};
