//* https://www.codewars.com/kata/6397b0d461067e0030d1315e/train/typescript

export function toIndustrial(time: number | string): number {
	let totalHours = 0;
	if (typeof time === 'string') {
		const [hours, minutes] = time.split(':').map(Number);
		totalHours = hours + minutes / 60;
	} else if (typeof time === 'number') totalHours = time / 60;
	return Math.round(totalHours * 100) / 100;
}

export function toNormal(time: number): string {
	let hours = Math.floor(time);
	let minutes = Math.round((time - hours) * 60);
	if (minutes > 59) {
		const restMinutes = minutes % 60;
		const restHours = Math.floor(minutes / 60);
		hours += restHours;
		minutes = restMinutes;
	}
	return `${hours.toString()}:${minutes.toString().padStart(2, '0')}`;
}
