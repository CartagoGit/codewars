export const initZozonacci = () => {
	return zozonacci(['fib', 'tri'], 7);
};

export function zozonacci(pattern: string[], length: number): number[] {
	if (pattern.length === 0 || length === 0) return [];
	let sequence = [];
	let counter = 0;
	for (let i = 0; i < length; i++) {
		if (i < 4) {
			sequence.push(zozonacciFormula[pattern[0]].init[i]);
			continue;
		}
		sequence.push(zozonacciFormula[pattern[counter]].method(i, sequence));
		counter++;
		if (counter >= pattern.length) counter = 0;
	}

	return sequence;
}

export const zozonacciFormula: {
	[key in string]: {
		init: number[];
		method: (index: number, sequence: number[]) => number;
	};
} = {
	fib: {
		init: [0, 0, 0, 1],
		method: (index, sequence) => sequence[index - 1] + sequence[index - 2],
	},
	jac: {
		init: [0, 0, 0, 1],
		method: (index, sequence) =>
			sequence[index - 1] + 2 * sequence[index - 2],
	},
	pad: {
		init: [0, 1, 0, 0],
		method: (index, sequence) => sequence[index - 2] + sequence[index - 3],
	},
	pel: {
		init: [0, 0, 0, 1],
		method: (index, sequence) =>
			2 * sequence[index - 1] + sequence[index - 2],
	},
	tet: {
		init: [0, 0, 0, 1],
		method: (index, sequence) =>
			sequence[index - 1] +
			sequence[index - 2] +
			sequence[index - 3] +
			sequence[index - 4],
	},
	tri: {
		init: [0, 0, 0, 1],
		method: (index, sequence) =>
			sequence[index - 1] + sequence[index - 2] + sequence[index - 3],
	},
};
