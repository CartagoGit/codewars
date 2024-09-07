//* https://www.codewars.com/kata/567e8f7b4096f2b4b1000005/train/typescript

interface String {
	eightBitNumber(): boolean;
}

String.prototype.eightBitNumber = function (): boolean {
	return /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)$/.test(`${this}`);
};
