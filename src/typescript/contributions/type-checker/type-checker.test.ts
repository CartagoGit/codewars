import { BasicAllTypes, typeChecker } from './type-checker';

// TestCases
const kindValues: Record<BasicAllTypes, unknown[]> = {
	array: [
		[],
		[1, 2, 3],
		['a', 'b', 'c'],
		[true, false, true],
		[{}],
		[null],
		[undefined],
		[NaN],
		[Symbol('a'), Symbol('b'), Symbol('c')],
		[() => {}, () => {}, () => {}],
		[BigInt(1), BigInt(2), BigInt(3)],
		[[], {}, '', true, 1, Symbol('a'), () => {}, BigInt(1)],
		new Array(),
		new Array<unknown>(1, 'b', true),
		new Array({}),
	],
	classObject: [
		new String('a'),
		new Number(1),
		new Boolean(true),
		new Date(),
		new RegExp(''),
		new Map(),
	],
	NaN: [NaN],
	null: [null],
	string: ['a', 'b', 'c'],
	number: [1, 2, 3],
	boolean: [true, false],
	object: [
		new Object(),
		{},
		{ a: 1 },
		{ b: 2 },
		{ c: 3 },
		{ a: 1, b: 2, c: 3 },
		{ a: [], b: {}, c: '' },
	],
	undefined: [undefined],
	symbol: [Symbol('a'), Symbol('b'), Symbol('c')],
	function: [() => {}, typeChecker, function () {}, new Function()],
	bigint: [BigInt(1), BigInt(2), BigInt(3)],
};

// Helper functions
const changeColorsOk = (checker: boolean): string[] => {
	return [
		checker ? '\x1b[36m' : '\x1b[31m',
		checker ? 'Passed' : 'Failed',
		'\x1b[0m',
	];
};

const convertToString = (value: unknown): string => {
	if (!value) return `${value}`;
	if (typeof value === 'symbol') return value.toString();
	if (typeof value === 'object') {
		if (Array.isArray(value))
			return `[${value.map((item) => convertToString(item)).join(', ')}]`;
		let result: Record<string, unknown> = {};
		for (let key in value) {
			result[key] = convertToString((value as any)[key]);
		}
		return JSON.stringify(result);
	}

	if (typeof value === 'function') return value.toString();
	return `${value}`;
};

const testChecker = (key: BasicAllTypes, value: unknown): boolean => {
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

let listTests: boolean[] = [];

for (let keyValue in kindValues) {
	const key = keyValue as BasicAllTypes;
	describe('Type Check suite for ' + key, () => {
		let keyTests: boolean[] = [];
		for (let value of kindValues[key]) {
			it(`should correctly identify ${key} type of: ${convertToString(
				value
			)}`, () => {
				const valueTest = testChecker(key, value);
				expect(valueTest).toBe(true);
			});
		}
		const areTestsOk = keyTests.every((value) => value);
		listTests.push(areTestsOk);
	});
}
describe('Type Check Tests', () => {
	it('all tests should pass', () => {
		expect(listTests.every((value) => value)).toBe(true);
	});
});
