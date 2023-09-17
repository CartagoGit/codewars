export const doubleChar = (str: string): string =>
	str
		.split("")
		.map((char) => char + char)
		.join("");
