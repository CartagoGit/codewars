export function xo(str: string): boolean {
	let x = 0,
		o = 0;
	for (const letter of str) {
		if (letter.toLowerCase() === "x") x++;
		else if (letter.toLowerCase() === "o") o++;
	}
	return x === o;
}
