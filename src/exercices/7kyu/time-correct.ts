export const initTimeCorrect = (): string | null => {
	return timeCorrect("24:30:3");
};

export function timeCorrect(timestring: string | null): string | null {
	if (!timestring) return timestring;
	const arrayTimers = timestring.split(":").map((timer) => Number(timer));
	if (arrayTimers.length !== 3 || arrayTimers.some((timer) => isNaN(timer))) {
		return null;
	}
	const [hours, minutes, seconds] = arrayTimers;
	const totalSeconds = hours * 60 * 60 + minutes * 60 + seconds;
	const finalHours = Math.floor((totalSeconds / (60 * 60)) % 24);
	const finalMinutes = Math.floor((totalSeconds / 60) % 60);
	const finalSeconds = totalSeconds % 60;
	return `${getFinalNumberString(finalHours)}:${getFinalNumberString(
		finalMinutes
	)}:${getFinalNumberString(finalSeconds)}`;
}

export function getFinalNumberString(num: number): string {
	return num > 9 ? num.toString() : "0" + num;
}
