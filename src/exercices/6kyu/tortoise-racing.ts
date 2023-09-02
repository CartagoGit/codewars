//* https://www.codewars.com/kata/582087e5b81f7063a7000242/train/typescript

export function race(
	aSpeed: number,
	bSpeed: number,
	adventage: number
): [number, number, number] | null {
	console.log({ aSpeed, bSpeed, adventage });
	if (aSpeed >= bSpeed) return null;
	const timeInHours: number = adventage / (bSpeed - aSpeed);
	const seconds = Math.trunc((timeInHours * 3600) % 60); // Total seconds
	const minutes = Math.trunc((timeInHours * 60) % 60); // Total minutes
	const hours = Math.trunc(timeInHours); // Total hours

	return [hours, minutes, seconds];
}
