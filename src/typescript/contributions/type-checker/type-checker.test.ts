import { BasicAllTypes, typeChecker } from './type-checker';
import { convertToString, testChecker } from './utils.helper';

// import { BasicAllTypes, typeChecker } from './solution';
// import { convertToString, testChecker, changeColorsOk } from './preloaded';
import { expect } from 'chai';

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

let listTests: boolean[] = [];

for (let keyValue in kindValues) {
	const key = keyValue as BasicAllTypes;
	describe('Type Check suite for ' + key, () => {
		let keyTests: boolean[] = [];
		for (let value of kindValues[key]) {
			it(`should correctly identify ${key} type of: ${convertToString(
				value
			)}`, () => {
				const valueTest = testChecker({ key, value, typeChecker });
				expect(valueTest).equal(true);
			});
		}
		const areTestsOk = keyTests.every((value) => value);
		listTests.push(areTestsOk);
	});
}
describe('Type Check Tests', () => {
	it('all tests should pass', () => {
		expect(listTests.every((value) => value)).equal(true);
	});
});
