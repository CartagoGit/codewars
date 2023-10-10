const gravity = 9.81; // Earth gravity m/s^2
const reactionTime = 1; // Expected reaction time in seconds
const mass = 1; // Expected car mass in kg

export function dist(speed: number, friction: number): number {
	const msSpeed = (speed * 1000) / 3600; // Parse speed from km/h to m/s
	const brakeDistance = msSpeed ** 2 / (2 * friction * gravity);
	const reactionDistance = msSpeed * reactionTime;
	return brakeDistance + reactionDistance;
}

export function speed(distance: number, friction: number): number {
	// This formula is based on fundamental laws of physics, including Newton's laws and the Coulomb's law of friction.
	const speedDown: number = -(2 * friction * gravity * reactionTime) / mass;
	// The quadratic formula is used to solve the motion equation with friction.
	// The equation is: speedDown * t^2 + speedDown * t - 2 * distance = 0, and it's solved for t.
	const msSpeed =
		(speedDown + Math.sqrt(speedDown ** 2 - 4 * speedDown * distance)) / 2;
	return (3600 * msSpeed) / 1000; // Convert speed from m/s to km/h
}

