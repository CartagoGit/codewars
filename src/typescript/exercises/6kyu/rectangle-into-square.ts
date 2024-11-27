//* https://www.codewars.com/kata/55466989aeecab5aac00003e/train/typescript

export const sqInRect = (l: number, w: number): null | number[] => {
	if (l === w) return null;
	const recursive = (size1: number, size2: number): number[] => {
		const [min, max] = size1 < size2 ? [size1, size2] : [size2, size1];
		if (min === 0) return [];
		return [min, ...recursive(min, max - min)];
	};
	return recursive(l, w);
};

console.log(sqInRect(5, 5)); //, null);
console.log(sqInRect(5, 3)); //[3, 2, 1, 1]);
console.log(sqInRect(3, 5)); //[3, 2, 1, 1]);
console.log(sqInRect(20, 14)); //[14, 6, 6, 2, 2, 2]);
console.log(sqInRect(14, 20)); //[14, 6, 6, 2, 2, 2]);
