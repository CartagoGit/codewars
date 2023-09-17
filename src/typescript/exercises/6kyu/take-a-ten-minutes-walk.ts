export const initIsValidWalk = (): boolean => {
	return isValidWalk([
		"w",
		"e",
		"w",
		"e",
		"w",
		"e",
		"w",
		"e",
		"w",
		"e",
		"w",
		"e",
	]);
};

type Directions = "n" | "s" | "e" | "w";

export function isValidWalk(walk: string[]): boolean {
	if (walk.length !== 10) return false;
	let position: [number, number] = [0, 0];
	walk.forEach((direction) => {
		position = directionsActions[direction as Directions](position);
	});
	return position.every((value) => value === 0);
}

const directionsActions: {
	[key in Directions]: (Array: [number, number]) => [number, number];
} = {
	n: ([x, y]) => [x, y + 1],
	s: ([x, y]) => [x, y - 1],
	e: ([x, y]) => [x + 1, y],
	w: ([x, y]) => [x - 1, y],
};
