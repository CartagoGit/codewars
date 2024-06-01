//* https://www.codewars.com/kata/5d26721d48430e0016914faa/train/typescript

export function* paperFold(): Generator<number, any, undefined> {
	let current = '1';
	let counter = 0;
	while (true) {
		while (counter < current.length) {
			yield parseInt(current[counter]);
			counter++;
		}
		current = `${current}1${current
			.split('')
			.map((c) => (c === '1' ? '0' : '1'))
			.reverse()
			.join('')}`;
	}
}
