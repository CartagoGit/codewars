//* https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/typescript

export const calc = (str: string): number => {
	const total1 = str
		.split('')
		.map((char) => char.charCodeAt(0))
		.join('');
	const total2 = total1.replace(/7/g, '1');
	return (
		total1.split('').reduce((acc, curr) => acc + Number(curr), 0) -
		total2.split('').reduce((acc, curr) => acc + Number(curr), 0)
	);
};
