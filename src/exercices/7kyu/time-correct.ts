export const initTimeCorrect = (): string | null => {
	return timeCorrect("10:30:3a");
};

export function timeCorrect(timestring: string | null): string | null {
	if (!timestring) return null;
	const arrayTimers = timestring.split(":").map((timer) => Number(timer));
    console.log(arrayTimers);
	if (
        arrayTimers.length !== 3 ||
		arrayTimers.some((timer) => typeof timer !== "number")
        ) {
            return null;
        }
	let [hours, minutes, seconds] = arrayTimers;
	const totalSeconds = hours * 60 * 60 + minutes * 60 + seconds;
	return "?";
}
