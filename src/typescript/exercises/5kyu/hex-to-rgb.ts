//* https://www.codewars.com/kata/5282b48bb70058e4c4000fa7/train/typescript

export function hexStringToRGB(hexString: string): {
	r: number;
	g: number;
	b: number;
} {
	const [r, g, b] = hexString
		.slice(1)
		.match(/.{1,2}/g)!
		.map((hex) => parseInt(hex, 16));
	return { r, g, b };
}
