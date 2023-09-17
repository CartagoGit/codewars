export const initJosephusPermutation = () => {
	return josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1);
};

export const josephus = <T>(items: T[], k: number): T[] => {
	let counter = 0;
	let result: T[] = [];
	while (items.length > 0) {
		counter = counter + k - 1;
		while (counter >= items.length) counter = counter - items.length;
		result.push(items.splice(counter, 1)[0]);
	}
	return result;
};
