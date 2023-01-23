import {
	getTribonacciSequence,
	getTetranacciSequence,
	getPellSequence,
	getPadovanSequence,
	getJacobstahlSequence,
	getFibonacciSequence,
} from "../../helpers/sequences";

export const initMixbonacci = () => {
	const result = mixbonacci(["fib", "tet"], 10);
	return result;
};

export function mixbonacci(pattern: string[], length: number): number[] {
	if (pattern.length === 0 || length === 0) return [];
	Object.values(mixbonacciFormula).forEach(
		(formula) => (formula.counter = 0)
	);
	let sequence: number[] = [];
	let counterPrio = 0;
	for (let i = 0; i < length; i++) {
		const { counter, method } = mixbonacciFormula[pattern[counterPrio]];
		const sequenceInPattern: number[] = method(counter);
		sequence.push(sequenceInPattern[sequenceInPattern.length - 1]);
		mixbonacciFormula[pattern[counterPrio]].counter = counter + 1;
		counterPrio++;
		if (counterPrio >= pattern.length) counterPrio = 0;
	}

	return sequence;
}

export const mixbonacciFormula: {
	[key in string]: {
		counter: number;
		method: (limit: number) => number[];
	};
} = {
	fib: {
		counter: 0,
		method: getFibonacciSequence,
	},
	jac: {
		counter: 0,
		method: getJacobstahlSequence,
	},
	pad: {
		counter: 0,
		method: getPadovanSequence,
	},
	pel: {
		counter: 0,
		method: getPellSequence,
	},
	tet: {
		counter: 0,
		method: getTetranacciSequence,
	},
	tri: {
		counter: 0,
		method: getTribonacciSequence,
	},
};
