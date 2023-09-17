//* https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/typescript

export const initDuplicateCount = (): number => duplicateCount("abbbbccde");

export const duplicateCount = (text: string): number => {
	const arrayLower = text.toLowerCase().split("");
	const uniques = [...new Set(arrayLower)];
	let counter = 0;
	for (let letter of uniques) {
		if (arrayLower.filter((item) => item === letter).length > 1) counter++;
	}
	return counter;
};
