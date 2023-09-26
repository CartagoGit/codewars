//* https://www.codewars.com/kata/62b3356dacf409000f53cab7/train/typescript

type KindToken = 'INC_INT' | 'INC_FLOAT' | 'INTERVAL' | 'PERIODIC';

class Token {
	private _value: number;
	private _initValue: number;
	private _step: number;
	private _count: number = 0;
	private _kind: KindToken;
	private _decimalFixed: number;

	private _defaultValues: Record<KindToken, { value: number; step: number }> =
		{
			INC_INT: {
				value: 1,
				step: 1,
			},
			INC_FLOAT: {
				value: 0.1,
				step: 0.1,
			},
			INTERVAL: {
				value: 1,
				step: 1,
			},
			PERIODIC: {
				value: 1,
				step: 1,
			},
		};

	constructor(data: { start?: string; step?: string; kind: KindToken }) {
		this._kind = data.kind;
		let initStep = '';
		if (this._kind === 'INTERVAL')
			initStep =
				data.step ??
				data.start ??
				this._defaultValues[data.kind].step.toString();
		else
			initStep =
				data.step ?? this._defaultValues[data.kind].step.toString();
		const initValue =
			data.start ?? this._defaultValues[data.kind].value.toString();
		this._step = Number(initStep);
		this._value = Number(initValue);
		this._decimalFixed = Math.max(
			initStep?.split('.')[1]?.length ?? 0,
			initValue?.split('.')[1]?.length ?? 0
		);
		this._initValue = this._value;
	}

	public next(): string {
		const method = {
			INC_INT: () => this._incInt(),
			INC_FLOAT: () => this._incFloat(),
			INTERVAL: () => this._interval(),
			PERIODIC: () => this._periodic(),
		};
		return method[this._kind]();
	}

	private _incInt(): string {
		const value = this._value;
		this._value += this._step;
		return value.toString();
	}

	private _incFloat(): string {
		const value = this._value;
		this._value += this._step;
		return value.toFixed(this._decimalFixed);
	}

	private _interval(): string {
		const value = this._value;
		this._value =
			this._value === this._step ? this._initValue : this._value + 1;
		return value.toString();
	}

	private _periodic(): string {
		const value = this._value;
		this._count++;
		if (this._count === this._step) {
			this._count = 0;
			this._value++;
		}
		return value.toString();
	}
}

export function* stringGenerator(pattern: string): Generator<string> {
	let tokens: Record<string, Token> = {};
	// Get [ .... ] pattern
	const patternToReplace = /\[(.*?)\]/g;

	pattern.replaceAll(patternToReplace, (match: string) => {
		const type = match.match(
			/INC_INT|INC_FLOAT|INTERVAL|PERIODIC/
		)?.[0] as KindToken;
		const [param1, param2] = match.match(/\d+(\.\d+)?/g) || [
			undefined,
			undefined,
		];
		console.log({ match, type, param1, param2 });
		const start = param1 ? param1.trim() : undefined;
		const step = param2 ? param2.trim() : undefined;
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
	});

	while (true) {
		yield pattern.replaceAll(patternToReplace, (match: string) => {
			const token = tokens[match];
			return token.next();
		});
	}
}
