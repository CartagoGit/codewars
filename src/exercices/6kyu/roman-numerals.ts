//* https://www.codewars.com/kata/59ea10e87729993f87001647/train/typescript

// ? Atento por que al ser una declaración global hay que declararlo en un archivo .d.ts

/// <reference path="types/roman-numerals.d.ts" />

const numberHandler = {
	get: function (target: Number, prop: string, receiver: Number) {
		if (!(typeof prop === 'string') || !isNaN(Number(prop)))
			return Reflect.get(target, prop, this);
		const start = receiver.valueOf() as number;
		const end = romanToDecimal(prop);
		return [
			...Array.from({ length: end - start }, (_, index) => start + index),
		];
	},
};

Object.setPrototypeOf(
	Number.prototype,
	new Proxy(Number.prototype, numberHandler)
);

function romanToDecimal(roman: string) {
	const romanNumerals: Record<string, number> = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	let decimal = 0;
	for (let i = 0; i < roman.length; i++) {
		const current = romanNumerals[roman[i]];
		const next = romanNumerals[roman[i + 1]];
		if (next > current) {
			decimal += next - current;
			i++;
		} else decimal += current;
	}
	return decimal;
}
