//* https://www.codewars.com/kata/64f86726f8ce0f003342b79d/train/typescript

export function* range(
	start: number = 0,
	stop?: number,
	step: number = 1
): Generator<number> {
	for (let i = start; i < (stop ?? Infinity); i += step) yield i;
}

export function* generate<T>(
	start: T,
	iterate: (e: T) => T,
	continues?: (e: T) => boolean
): Generator<T> {
	while (continues?.(start) ?? true) {
		yield start;
		start = iterate(start);
	}
}

// export function* delta<T, D>(
// 	sequence: Iterable<T>,
// 	delta: (a: T, b: T) => D,
// 	start?: T
// ): Generator<D> {
// 	const iterator = sequence[Symbol.iterator]();
// 	let prev = start !== undefined ? start : iterator.next().value;
// 	while (start === undefined) {
// 		let curr = iterator.next().value;
// 		yield delta(prev, curr);
// 		prev = curr;
// 	}
// 	for (let curr of sequence) {
// 		yield delta(prev, curr);
// 		prev = curr;
// 	}
// }
export function* delta<T, D>(
	sequence: Iterable<T>,
	delta: (a: T, b: T) => D,
	start?: T
): Generator<D> {
	const iterator = sequence[Symbol.iterator]();
	let prev = start !== undefined ? start : iterator.next().value;
	let curr = iterator.next();

	while (!curr.done) {
		yield delta(prev, curr.value);
		prev = curr.value;
		curr = iterator.next();
	}
}

export function* zip<T, U>(
	sequence1: Iterable<T>,
	sequence2: Iterable<U>
): Generator<[T, U]> {}
