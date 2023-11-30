//* https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/train/typescript

export function evaporator(
	_content: number,
	evapPerDay: number,
	threshold: number
): number {
	let days = 0;
	let percentContent = 100;
	while (percentContent > threshold) {
		percentContent -= percentContent * (evapPerDay / 100);
		days++;
	}
	return days;
}
