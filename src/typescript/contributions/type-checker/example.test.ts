import { BasicAllTypes, typeChecker } from './type-checker';
import { convertToString, testChecker } from './utils.helper';
// import { BasicAllTypes, typeChecker } from './solution';
// import { convertToString, testChecker } from './preloaded';
import { expect } from "chai";

// TestCases
const kindValues: Record<BasicAllTypes, unknown[]> = {
	array: [new Array()],
	classObject: [new Date()],
	NaN: [NaN],
	null: [null],
	string: ['a'],
	number: [1],
	boolean: [true],
	object: [{}],
	undefined: [undefined],
	symbol: [Symbol('a')],
	function: [new Function()],
	bigint: [BigInt(1)],
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
