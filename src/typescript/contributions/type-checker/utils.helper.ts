import { BasicAllTypes } from './type-checker';
// import { BasicAllTypes } from './solution';

// Helper functions
export const changeColorsOk = (checker: boolean): string[] => {
	return [
		checker ? '\x1b[36m' : '\x1b[31m',
		checker ? 'Passed' : 'Failed',
		'\x1b[0m',
	];
};

export const convertToString = (value: unknown): string => {
	if (!value) return `${value}`;
	if (typeof value === 'symbol') return value.toString();
	if (typeof value === 'object') {
		if (Array.isArray(value))
			return `[${value.map((item) => convertToString(item)).join(', ')}]`;
		try {
			return JSON.stringify(value);
		} catch {
			let result: Record<string, unknown> = {};
			for (let key in value) {
				result[key] = convertToString((value as any)[key]);
			}
			return JSON.stringify(result);
		}
	}

	if (typeof value === 'function') return value.toString();
	return `${value}`;
};

export const testChecker = (data: {
	key: BasicAllTypes;
	value: unknown;
	typeChecker: Function;
}): boolean => {
	const { key, value, typeChecker } = data;
	const result = typeChecker(value);
	const isOk = key === result;
	if (!isOk) {
		console.log(
			'Value:\n ',
			{ value },
			' \nResult => ',
			result,
			'\nExpected => ',
			key,
			'\n\n',
			...changeColorsOk(isOk)
		);
	}
	return isOk;
};
