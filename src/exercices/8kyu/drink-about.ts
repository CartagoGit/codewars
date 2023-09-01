//* https://www.codewars.com/kata/56170e844da7c6f647000063/train/typescript

export function peopleWithAgeDrink(old: number): string {
	const drink = (old: number) => {
		if (old < 14) return 'toddy';
		if (old < 18) return 'coke';
		if (old < 21) return 'beer';
		return 'whisky';
	};
	return `drink ${drink(old)}`;
}
