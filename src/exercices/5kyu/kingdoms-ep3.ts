//* https://www.codewars.com/kata/616eedc41d5644001ff97462/train/typescript

export function countAndSort(target: string[]): string[] {
	console.log({ target });
	let counterScore: Record<string, { score: number; arrows: number }> = {};
	const maxScores = (target.length + 1) / 2;
	const positionScores = Array.from({ length: target.length }, (_, index) => {
		if (maxScores >= index + 1) return index + 1;
		return target.length - index;
	});

	for (let [rowIndex, row] of target.entries()) {
		console.log({ rowIndex, row });
		for (let [colIndex, char] of row.split('').entries()) {
			console.log({ colIndex, char });
			if (char === '*') continue;
			const lowerChar = char.toLowerCase();
			let { score, arrows } = counterScore[lowerChar] || {
				score: 0,
				arrows: 0,
			};
			const arrowsInPosition = char === char.toUpperCase() ? 2 : 1;
			arrows = arrows + arrowsInPosition;
			score =
				score +
				positionScores[Math.min(...[rowIndex, colIndex])] *
					arrowsInPosition;
			counterScore[lowerChar] = { score, arrows };
		}
	}
	console.log({ counterScore });

	return [];
}
