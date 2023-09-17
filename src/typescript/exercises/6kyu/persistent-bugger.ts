export function persistence(num: number): number {
	let counter: number = 0;
	const myFunc = (num: string) => Number(num);
	while ([...num.toString()].length > 1) {
		counter++;
		num = Array.from(num.toString(), myFunc).reduce(
			(acumulator, current) => acumulator * current
		);
	}
	return counter;
}
