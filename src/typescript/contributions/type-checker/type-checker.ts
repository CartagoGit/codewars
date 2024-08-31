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
export type BasicAllTypes = BasicTypes | BasicComplexTypes;

// Function to check the type of the argument
export function typeChecker(value: unknown): BasicAllTypes {
	if (value === null) return 'null';
	if (Array.isArray(value)) return 'array';
	if (typeof value === 'object') {
		if (value.constructor.name !== 'Object') return 'classObject';
		return 'object';
	}
	if (value !== value) return 'NaN';
	return typeof value as BasicAllTypes;
}
