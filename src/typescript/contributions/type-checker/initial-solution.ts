// Basic types for the argument
type BasicTypes = 'string' | 'number' | 'boolean' | 'object' | 'undefined' | 'symbol' | 'function' | 'bigint';
type BasicComplexTypes = 'array' | 'classObject' | 'NaN' | 'null';
export type BasicAllTypes = BasicTypes | BasicComplexTypes;

// Function to check the type of the argument
export function typeChecker(value: unknown): BasicAllTypes {
  //example
  if(typeof value === "string") return "string";
  
  // Remember return a BasicAllTypes solution
	return value as BasicAllTypes;
}
