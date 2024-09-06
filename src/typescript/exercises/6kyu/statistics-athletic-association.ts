//* https://www.codewars.com/kata/55b3425df71c1201a800009c/train/typescript

export const stat = (s: string): string => {
	if (!s) return '';
	// Get Seconds
	const totalSeconds = s.split(', ').map((time) => {
		let [hours, minutes, seconds] = time
			.split('|')
			.map((time) => parseInt(time ?? '0'));
		minutes = minutes + hours * 60;
		seconds = seconds + minutes * 60;
		return seconds;
	});
	// Calculate Range, Average and Median
	const range = Math.max(...totalSeconds) - Math.min(...totalSeconds);
	const average =
		totalSeconds.reduce((acc, time) => acc + time, 0) / totalSeconds.length;
	const numSorted = totalSeconds.sort((a, b) => a - b);
	const isEven = numSorted.length % 2 === 0;
	const halfSorted = Math.floor(numSorted.length / 2);
	let median = numSorted[halfSorted];
	if (isEven)
		median = (numSorted[halfSorted] + numSorted[halfSorted - 1]) / 2;

	// Parsed Result
	return `Range: ${formatTime(range)} Average: ${formatTime(
		average
	)} Median: ${formatTime(median)}`;
};

// Return the time in the format HH|MM|SS
const formatTime = (time: number) => {
	const hours = Math.floor(time / 3600);
	const minutes = Math.floor((time % 3600) / 60);
	const seconds = Math.trunc(time % 60);
	return `${hours.toString().padStart(2, '0')}|${minutes
		.toString()
		.padStart(2, '0')}|${seconds.toString().padStart(2, '0')}`;
};

// Test cases
const res1 = stat('01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17');
const expected1 = 'Range: 01|01|18 Average: 01|38|05 Median: 01|32|34';
const res2 = stat(
	'02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41'
);
const expected2 = 'Range: 00|31|17 Average: 02|26|18 Median: 02|22|00';
const res3 = stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17');
const expected3 = 'Range: 00|31|17 Average: 02|27|10 Median: 02|24|57';

console.log({ res1, res2, res3 });
console.log({
	isOk1: res1 === expected1,
	isOk2: res2 === expected2,
	isOk3: res3 === expected3,
});
