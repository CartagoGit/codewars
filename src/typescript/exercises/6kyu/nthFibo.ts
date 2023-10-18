import { getFibonacciSequence } from '../../helpers/sequences';

export const initNthFibo = (): number => {
	return nthFibo(4);
};

export function nthFibo(n: number): number {
	const sequence = getFibonacciSequence(n - 1);
	return sequence[sequence.length - 1];
}
