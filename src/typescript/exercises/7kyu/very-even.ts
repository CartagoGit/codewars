//* https://www.codewars.com/kata/58c9322bedb4235468000019/train/typescript

export const isVeryEvenNumber = (n: number): boolean => {
	let veryEvenNum = n.toString();
	while (veryEvenNum.length > 1) {
		veryEvenNum = veryEvenNum
			.split('')
			.reduce((acc, num) => acc + parseInt(num), 0)
			.toString();
	}
    return parseInt(veryEvenNum) % 2 === 0;
};
