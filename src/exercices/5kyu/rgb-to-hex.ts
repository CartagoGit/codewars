//* https://www.codewars.com/kata/513e08acc600c94f01000001/train/typescript

export function rgb(r: number, g: number, b: number): string {
	const result = [r, g, b]
		.map((color) => {
			color = color < 0 ? 0 : color > 255 ? 255 : color;
            let hex = color.toString(16);
            hex = hex.length === 1 ? '0' + hex : hex;
			return hex;
		})
		.join('')
		.toUpperCase();
	return result;
}
