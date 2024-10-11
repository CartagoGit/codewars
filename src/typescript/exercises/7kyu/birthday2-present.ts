//* https://www.codewars.com/kata/5805f0663f1f9c49be00011f/train/typescript

export function present(x: string, y: number): string {
	const present: Record<string, () => string> = {
		badpresent: () => 'Take this back!',
		goodpresent: () => x.split('').map((letter) => String.fromCharCode(letter.charCodeAt(0) + y)).join(''),
		crap: () => x.split('').sort().join(''),
		empty: () => x.split('').sort().join(''),
		bang: () => x.split('').map(char => char.charCodeAt(0) - y).reduce((acc, curr) => acc + curr, 0).toString(),
		dog: () => `pass out from excitement ${y} times`,
	};
	return present[x]();
}
