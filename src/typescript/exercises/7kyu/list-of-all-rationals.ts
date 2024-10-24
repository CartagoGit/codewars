//* https://www.codewars.com/kata/5e4e8f5a72d9550032953717/train/typescript

export function* allRationals(): IterableIterator<[number, number]> {
	const queue: [number, number][] = [[1, 1]];
	while (true) {
		const [a, b] = queue.shift()!;
		yield [a, b];
		queue.push([a, a + b]);
		queue.push([a + b, b]);
	}
}
