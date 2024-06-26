//* https://www.codewars.com/kata/61c78b57ee4be50035d28d42/train/typescript

export const mergeStrings = (first: string, second: string): string => {
	let secondIndex = 0;
	for (let i = 0; i < first.length; i++) {
		if (first[i] === second[secondIndex]) secondIndex++;
		else if (first[i] === second[0]) secondIndex = 1;
		else secondIndex = 0;
	}
	return first + second.slice(secondIndex);
};
