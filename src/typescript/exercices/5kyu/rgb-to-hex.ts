//* https://www.codewars.com/kata/513e08acc600c94f01000001/train/typescript

export const rgb = (r: number, g: number, b: number): string => {
	return [r, g, b]
		.map((color) =>
			Math.max(0, Math.min(255, color)).toString(16).padStart(2, '0')
		)
		.join('')
		.toUpperCase();
};
