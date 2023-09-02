//* https://www.codewars.com/kata/582087e5b81f7063a7000242/train/typescript

export function race(
	aSpeed: number,
	bSpeed: number,
	adventage: number
): [number, number, number] | null {
	if (aSpeed >= bSpeed) return null;
	const timeInHours: number = adventage / (bSpeed - aSpeed);
	const seconds = (timeInHours * 3600) % 60;
	const minutes = (timeInHours * 60) % 60;
	const hours = timeInHours;
	return [hours, minutes, seconds].map(Math.trunc) as [
		number,
		number,
		number
	];
}
