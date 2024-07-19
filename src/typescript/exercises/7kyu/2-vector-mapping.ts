//* https://www.codewars.com/kata/5da995d583326300293ce4cb/train/typescript

export function mapVector(
	initPosition: [number, number],
	circle1: [number, number, number],
	circle2: [number, number, number]
): [number, number] {
	const [xP, yP] = initPosition;
	const [x1, y1, r1] = circle1;
	const [x2, y2, r2] = circle2;

	// Get the vector from the center of circle 1 to the Position
	const x1V = xP - x1;
	const y1V = yP - y1;

	// Get Ratio of the radius of circle 2 to circle 1
	const ratio = r2 / r1;

	// Get the vector scale for circle 2
	const x2V = x1V * ratio;
	const y2V = y1V * ratio;

	// Apply vector from circle 2 from the center of circle 1
	const xPositionFinal = x2V + x2;
	const yPositionFinal = y2V + y2;

	return [xPositionFinal, yPositionFinal];
}
