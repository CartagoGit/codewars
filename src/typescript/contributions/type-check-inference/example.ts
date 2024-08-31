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
	if (value instanceof Object) return 'classObject';
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

console.log(expectedChecker(EnumValues));

// const testChecker = (value: unknown) => {
// 	console.log(
// 		'Result: ',
// 		value + ' => ' + typeChecker(value),
// 		' // Expected: ',
// 		expectedChecker(value)
// 	);
// };
