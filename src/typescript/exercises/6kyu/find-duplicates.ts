//* https://www.codewars.com/kata/58cc070abd22e324b300002a/train/typescript

export function duplicated(
	arr: Record<string, number>[],
	keys: string[]
): Record<string, number>[] {
	console.log({ arr, keys });
	const result: any[] = [];
	for (let index = 0; index < arr.length; index++) {
		const item = arr[index];
		const keysInItem = getKeysInItem(item, keys);
		if (result.some((value) => areObjectsEqual(keysInItem, value)))
			continue;
		const someKeysInItemDuplicate = arr.some((value, index) => {
			if (index === arr.indexOf(item)) return false;
			const keysInValue = getKeysInItem(value, keys);
			return Object.entries(keysInItem).every(
				([key, value]) => keysInValue[key] === value
			);
		});
		console.log({ item, someKeysInItemDuplicate });
		if (someKeysInItemDuplicate) result.push(item);
	}

	console.log({ result });
	return result;
}

const getKeysInItem = (
	item: Record<string, number>,
	keys: string[]
): Record<string, number> => {
	const keysInItem: Record<string, number> = {};
	Object.entries(item).forEach(([key, value]) => {
		if (keys.includes(key)) keysInItem[key] = value;
	});
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
