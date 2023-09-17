export const initSumIntervals = () => {
	// return sumOfIntervals([
	// 	[0, 20],
	// 	[-1e8, 10],
	// 	[30, 40],
	// ]);
	return sumOfIntervals([
		[-208, 297],
		[256, 314],
		[304, 311],
		[133, 233],
		[409, 451],
		[-474, 374],
		[-223, 48],
		[-199, 159],
		[37, 163],
		[-405, 314],
	]);
};

export function sumOfIntervals(intervals: [number, number][]): number {
	for (let index = 0; index < intervals.length; index++) {
		const interval = intervals[index];

		for (
			let nextIndex = index + 1;
			nextIndex < intervals.length;
			nextIndex++
		) {
			const nextInterval = intervals[nextIndex];
			if (
				(interval[0] >= nextInterval[0] &&
					interval[0] <= nextInterval[1]) || // Case A overlaps with B
				(interval[1] >= nextInterval[0] &&
					interval[1] <= nextInterval[1]) || // Case B overlaps with A
				(interval[0] <= nextInterval[0] &&
					interval[1] >= nextInterval[1]) // Case A contains B or vice versa
			) {
				intervals[index] = [
					Math.min(interval[0], nextInterval[0]),
					Math.max(interval[1], nextInterval[1]),
				];
				intervals.splice(nextIndex, 1);
				index = -1;
				break;
			}
		}
	}

	return intervals.map(([min, max]) => max-min).reduce((a, b) => a + b, 0);
}
