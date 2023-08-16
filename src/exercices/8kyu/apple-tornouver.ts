//* https://www.codewars.com/kata/580a094553bd9ec5d800007d/train/typescript

export function apple(x: number | string): string {
	return Number(x) ** 2 > 1000
		? "It's hotter than the sun!!"
		: 'Help yourself to a honeycomb Yorkie for the glovebox.';
}
