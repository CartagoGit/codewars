//* https://www.codewars.com/kata/55b3425df71c1201a800009c/train/typescript

export const stat = (s: string): string => {
	if (!s) return '';
	const totalSeconds = s.split(', ').map((time) => {
		let [hours, minutes, seconds] = time
			.split('|')
			.map((time) => parseInt(time ?? '0'));
		minutes = minutes + hours * 60;
		seconds = seconds + minutes * 60;
		return seconds;
	});
	const range = Math.max(...totalSeconds) - Math.min(...totalSeconds);
	const average =
		totalSeconds.reduce((acc, time) => acc + time, 0) / totalSeconds.length;
	const median = totalSeconds.sort((a, b) => a - b)[
		Math.floor(totalSeconds.length / 2)
	];
	const formatTime = (time: number) => {
		const hours = Math.floor(time / 3600);
		const minutes = Math.floor((time % 3600) / 60);
		const seconds = Math.trunc(time % 60);
		return `${hours.toString().padStart(2, '0')}|${minutes
			.toString()
			.padStart(2, '0')}|${seconds.toString().padStart(2, '0')}`;
	};
	const result = `Range: ${formatTime(range)} Average: ${formatTime(
		average
	)} Median: ${formatTime(median)}`;
	console.log(result);
	return result;
};
