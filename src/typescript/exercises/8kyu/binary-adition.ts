//* https://www.codewars.com/kata/57642a90dee2da8dd3000161/train/typescript

export function arr2bin(arr: any[]): string {
	return arr
		.reduce((acc, curr) => acc + (typeof curr === 'number' ? curr : 0), 0)
		.toString(2);
}
