//* https://www.codewars.com/kata/61c78b57ee4be50035d28d42/train/typescript

export const mergeStrings = (first: string, second: string): string => {
	let result = '';
	let secondIndex = 0;
	for (let i = 0; i < first.length; i++) {
		if (first[i] === second[secondIndex]) secondIndex++;
		else secondIndex = 0;
	}
    result = first + second.slice(secondIndex);
    return result;
};
