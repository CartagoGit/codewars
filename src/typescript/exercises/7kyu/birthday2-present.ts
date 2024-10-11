//* https://www.codewars.com/kata/5805f0663f1f9c49be00011f/train/typescript

export function present(x: string, y: number): string {
	const present = {
		badpresent: () => 'Take this back!',
		goodpresent: () => {},
		crap: () => {},
		empty: () => {},
		bang: () => {},
		dog: () => `pass out from excitement ${y} times`,
	};
	return '';
}
