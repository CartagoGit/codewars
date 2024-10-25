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
	
}
