//* https://www.codewars.com/kata/58cc070abd22e324b300002a/train/typescript

export const duplicated = (
	initArray: Record<string, number>[],
	keys: string[]
): Record<string, number>[] => {
	const result: Record<string, number>[] = [];
	for (let item of initArray) {
		const index = initArray.indexOf(item);
		const keysInItem: Record<string, number> = getKeysInItem(item, keys);
		const someKeysInItemDuplicate = [...initArray].some(
			(someValue, someIndex) => {
				if (someIndex === index) return false;
				const keysInValue = getKeysInItem(someValue, keys);
				return Object.entries(keysInItem).every(
					([key, value]) => keysInValue[key] === value
				);
			}
		);
		if (!someKeysInItemDuplicate) continue;
		result.push(item);
	}
	return result;
};

const getKeysInItem = (
	item: Record<string, number>,
	keys: string[]
): Record<string, number> => {
	const keysInItem: Record<string, number> = {};
	for (let key of keys) {
		keysInItem[key] = item[key];
	}
	return keysInItem;
};

const areObjectsEqual = (
	obj1: Record<string, number>,
	obj2: Record<string, number>
): boolean => {
	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);
	if (keys1.length !== keys2.length) return false;
	for (const key of keys1) {
		if (obj1[key] !== obj2[key]) return false;
	}
	return true;
};
