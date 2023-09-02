//* https://www.codewars.com/kata/582087e5b81f7063a7000242/train/typescript

export function race(
	aSpeed: number,
	bSpeed: number,
	adventage: number
): [number, number, number] | null {
	if (aSpeed >= bSpeed) return null;
	const hours: number = adventage / (bSpeed - aSpeed);
	const seconds = (hours * 3600) % 60;
	const minutes = (hours * 60) % 60;
	return [hours, minutes, seconds].map((time) =>
		Math.floor(time + Number.EPSILON)
	) as [number, number, number];
}
