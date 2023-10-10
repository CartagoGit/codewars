//* https://www.codewars.com/kata/565c0fa6e3a7d39dee000125/train/typescript

const gravity = 9.81; // Earth gravity m/s^2
const reactionTime = 1; // Expected reaction time in seconds

export function dist(speed: number, friction: number): number {
	const msSpeed = (speed * 1000) / 3600; // Parse speed from km/h to m/s
	const brakeDistance = msSpeed ** 2 / (2 * friction * gravity);
	const reactionDistance = msSpeed * reactionTime;
	return brakeDistance + reactionDistance;
}

export function speed(distance: number, friction: number): number {
	const reactionDistance = distance - reactionTime;
	const msSpeed = Math.sqrt(2 * friction * gravity * reactionDistance);
	return (msSpeed * 3600) / 1000; // Parse speed from m/s to km/h
}
