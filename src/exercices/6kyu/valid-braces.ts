export function validBraces(braces: string): boolean {
	const dictionary: { open: string; close: string }[] = [
		{
			open: "[",
			close: "]",
		},
		{
			open: "{",
			close: "}",
		},
		{
			open: "(",
			close: ")",
		},
	];

	const arrayBraces = braces.split("");
	if (arrayBraces.length % 2 !== 0) return false;

	for (let i = 0; i < arrayBraces.length; i++) {
		const brace = arrayBraces[i];
		for (let symbol of dictionary) {
			if (symbol.close === brace) {
				if (i - 1 < 0) return false;
				console.log(arrayBraces);
				if (symbol.open !== arrayBraces[i - 1]) return false;
				else {
					arrayBraces.splice(i - 1, 2);
					i = 0;
				}
			}
		}
		if (arrayBraces.length === i + 1) return false;
	}
	return true;
}
