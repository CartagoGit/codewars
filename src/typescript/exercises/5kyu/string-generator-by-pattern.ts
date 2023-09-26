//* https://www.codewars.com/kata/62b3356dacf409000f53cab7/train/typescript

class IncInt {
	private value: number;
	private step: number;

	constructor(start = 1, step = 1) {
		this.value = start;
		this.step = step;
	}

	next() {
		const value = this.value;
		this.value += this.step;
		return value;
	}
}

class IncFloat {
	private value: number;
	private step: number;

	constructor(start = 0.1, step = 0.1) {
		this.value = start;
		this.step = step;
	}

	next() {
		const value = this.value;
		this.value += this.step;
		return value.toFixed(6); // Asegura la precisión decimal
	}
}

class Interval {
	private value: number;
	private first: number;
	private last: number;

	constructor(first = 1, last = 1) {
		this.value = first;
		this.first = first;
		this.last = last;
	}

	next() {
		const value = this.value;
		this.value = this.value == this.last ? this.first : this.value + 1;
		return value;
	}
}

class Periodic {
	private value: number;
	private step: number;
	private count: number;

	constructor(start = 1, step = 1) {
		this.value = start;
		this.step = step;
		this.count = 0;
	}

	next() {
		this.count++;
		if (this.count == this.step) {
			this.count = 0;
			this.value++;
		}
		return this.value;
	}
}

export function* stringGenerator(pattern: string): Generator<string> {
	const tokens = new Map<string, any>();

	// pattern.replace(/\[([A-Z_]+)=(\d+)?,?(\d+)?\]/g, (match, type, p1, p2) => {
	// 	const param1 = p1 ? p1.trim() : p1;
	// 	const param2 = p2 ? p2.trim() : p2;
	// 	switch (type.trim()) {
	// 		case 'INC_INT':
	// 			tokens.set(
	// 				match,
	// 				new IncInt(parseInt(param1), parseInt(param2))
	// 			);
	// 			break;
	// 		case 'INC_FLOAT':
	// 			tokens.set(
	// 				match,
	// 				new IncFloat(parseFloat(param1), parseFloat(param2))
	// 			);
	// 			break;
	// 		case 'INTERVAL':
	// 			tokens.set(
	// 				match,
	// 				new Interval(parseInt(param1), parseInt(param2))
	// 			);
	// 			break;
	// 		case 'PERIODIC':
	// 			tokens.set(
	// 				match,
	// 				new Periodic(parseInt(param1), parseInt(param2))
	// 			);
	// 			break;
	// 	}
	// 	return match;
	// });

	while (true) {
		yield pattern.replace(/\[[^\]]+\]/g, (match) => {
			const token = tokens.get(match);
			return token ? String(token.next()) : match;
		});
	}
}
