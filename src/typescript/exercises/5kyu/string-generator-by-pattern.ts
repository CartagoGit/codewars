//* https://www.codewars.com/kata/62b3356dacf409000f53cab7/train/typescript

type KindToken = 'INC_INT' | 'INC_FLOAT' | 'INTERVAL' | 'PERIODIC';

class Token {
	private _value: number;
	private _step: number;
	private _count: number;
	private _kind: KindToken;

	constructor(data: {
		start?: number;
		step?: number;
		count?: number;
		kind: KindToken;
	}) {
		const { start = 1, step = 1, count = 0, kind } = data;
		this._value = start;
		this._step = step;
		this._count = count;
		this._kind = kind;
	}

	public next(): string {
		const method = {
			INC_INT: this._incInt(),
			INC_FLOAT: this._incFloat(),
			INTERVAL: this._interval(),
			PERIODIC: this._periodic(),
		};
		return method[this._kind];
	}

	private _incInt(): string {
		const value = this._value;
		this._value += this._step;
		return value.toString();
	}

	private _incFloat(): string {
		const value = this._value;
		this._value += this._step;
		return value.toFixed(6);
	}

	private _interval(): string {
		const value = this._value;
		this._value = this._value == this._step ? this._value : this._value + 1;
		return value.toString();
	}

	private _periodic(): string {
		this._count++;
		if (this._count === this._step) {
			this._count = 0;
			this._value++;
		}
		return this._value.toString();
	}
}

export function* stringGenerator(pattern: string): Generator<string> {
	let tokens: Record<string, Token> = {};
	// Pattern to replace
	const patternToReplace = /\[([A-Z_]+)=?(\d+)?,?(\d+)?\]/g;
	pattern.replace(
		patternToReplace,
		(match: string, type: KindToken, param1: string, param2: string) => {
			const start = param1 ? parseInt(param1) : undefined;
			const step = param2 ? parseInt(param2) : undefined;
			const method: Record<KindToken, Token> = {
				INC_INT: new Token({
					start: start,
					step: step,
					kind: 'INC_INT',
				}),
				INC_FLOAT: new Token({
					start: start,
					step: step,
					kind: 'INC_FLOAT',
				}),
				INTERVAL: new Token({
					start: start,
					step: step,
					kind: 'INTERVAL',
				}),
				PERIODIC: new Token({
					start: start,
					step: step,
					kind: 'PERIODIC',
				}),
			};
			tokens[match] = method[type];
			return match;
		}
	);

	while (true) {
		yield pattern.replace(patternToReplace, (match: string) => {
			const token = tokens[match];
			return token.next();
		});
	}
}
