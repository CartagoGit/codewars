//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/typescript

export const accum = (chars: string): string => {
	return chars
		.split("")
		.map(
			(char, index) =>
				char.toUpperCase() + char.toLowerCase().repeat(index)
		)
		.join("-");
};
