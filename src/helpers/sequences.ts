/**
 * ? Formulas de famosas secuencias matematicas
 */

export const getFibonacciSecuence = (limit: number = 100): number[] => {
	function* generator(index: number = 0) {
		let first = index;
		let second = index + 1;
		while (index <= 1) yield index++;
		while (true) {
			const result = first + second;
			yield result;
			first = second;
			second = result;
		}
	}
	let counter = 0;
	const gen = generator();
	let sequence: number[] = [];
	while (counter < limit) {
		sequence.push(gen.next().value!);
		counter++;
	}
	return sequence || [];
};

export const getPadovanSecuence = (): number[] => {
	return [];
};

export const getJacobstahlSecuence = (): number[] => {
	return [];
};

export const getPellSecuence = (): number[] => {
	return [];
};

export const getTribonacciSecuence = (): number[] => {
	return [];
};

export const getTetranacciSecuence = (): number[] => {
	return [];
};

const sequencies: {
	[key in string]: { name: string; getSequence: () => number[] };
} = {
	fib: {
		name: "fibonacci",
		getSequence: getFibonacciSecuence,
	},
	pad: {
		name: "padovan",
		getSequence: getPadovanSecuence,
	},
	jac: {
		name: "jacobstahl",
		getSequence: getJacobstahlSecuence,
	},
	pel: {
		name: "pell",
		getSequence: getPellSecuence,
	},
	tri: {
		name: "tribonacci",
		getSequence: getTribonacciSecuence,
	},
	tet: {
		name: "tetranacci",
		getSequence: getTetranacciSecuence,
	},
};
