//* https://www.codewars.com/kata/567bf4f7ee34510f69000032/train/typescript

interface String {
	// Necessary, keep it here.
	digit(): boolean;
}

String.prototype.digit = function (): boolean {
	return /^\d$/.test(`${this}`);
};
