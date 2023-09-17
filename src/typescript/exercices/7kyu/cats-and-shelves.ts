export const initCatsAndShelves = (): number => {
	return catsAndShelves(1, 5);
};

export function catsAndShelves(start: number, finish: number) {
	let counter: number = 0;
	let index = start;
	while (index < finish) {
		if (index + 3 > finish) index++;
		else index += 3;
		counter++;
	}
	return counter;
}
