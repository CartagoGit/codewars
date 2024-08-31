// Basic types for the argument
type BasicTypes =
	| 'string'
	| 'number'
	| 'boolean'
	| 'object'
	| 'undefined'
	| 'symbol'
	| 'function'
	| 'bigint';
type BasicComplexTypes = 'array' | 'classObject' | 'NaN' | 'null';
type BasicAllTypes = BasicTypes | BasicComplexTypes;

export function expectedChecker(value: unknown): BasicAllTypes {
	if (value === null) return 'null';
	if (Array.isArray(value)) return 'array';
	if (value instanceof Object && typeof value === 'object')
		return 'classObject';
	if (value !== value) return 'NaN';
	return typeof value as BasicTypes;
}
// export function typeChecker(value: unknown): BasicTypes {}

// TestCases
enum Enum {
	A = 1,
	B = 2,
	C = 3,
}
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
		Enum,
	],
	NaN: [NaN],
	null: [null],
	string: ['a', 'b', 'c'],
	number: [1, 2, 3],
	boolean: [true, false],
	object: [
		{},
		{ a: 1 },
		{ b: 2 },
		{ c: 3 },
		{ a: 1, b: 2, c: 3 },
		{ a: [], b: {}, c: '' },
	],
	undefined: [undefined],
	symbol: [Symbol('a'), Symbol('b'), Symbol('c')],
	function: [() => {}, expectedChecker, function () {}, new Function()],
	bigint: [BigInt(1), BigInt(2), BigInt(3)],
};

const testChecker = (key: BasicAllTypes, value: unknown): boolean => {
	const result = expectedChecker(value);
	const isOk = key === result;
	console.log(
		'Value:\n ',
		{ value },
		' \nResult => ',
		// typeChecker(value),
		result,
		'\nExpected => ',
		key
	);
	console.log(
		isOk ? '\x1b[36m' : '\x1b[31m',
		isOk ? 'Passed' : 'Failed',
		'\x1b[0m'
	);
	console.log('-----------------------------------');
	return isOk;
};

let listTests: boolean[] = [];
for (let keyValue in kindValues) {
	const key = keyValue as BasicAllTypes;
	console.log(
		'<----------------------------------->',
		'\nInit Test for',
		key
	);
	const resultsKey = kindValues[key].map((value) => testChecker(key, value));
	const areTestsOk = resultsKey.every((value) => value);
	console.log(
		'Tests for ' + key,
		areTestsOk ? '\x1b[36m' : '\x1b[31m',
		areTestsOk ? 'Passed' : 'Failed',
		'\x1b[0m'
	);
	listTests.push(areTestsOk);
}
const isAllTestsOk = listTests.every((value) => value);
console.log(
	'<----------------------------------->',
	'\nFinal Result: ',
	isAllTestsOk ? '\x1b[36m' : '\x1b[31m',
	isAllTestsOk ? 'Passed' : 'Failed',
	'\x1b[0m'
);
