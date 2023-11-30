//* https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/train/typescript

export function evaporator(
	content: number,
	evapPerDay: number,
	threshold: number
): number {
	let days = 0;
	let percentageContent = 100;
	while (percentageContent > threshold) {
		percentageContent -= percentageContent * (evapPerDay / 100);
		days++;
	}
	return days;
}
