//* https://www.codewars.com/kata/616eedc41d5644001ff97462/train/typescript

export function countAndSort(target: string[]): string[] {
	console.log({ target });
	let counterScore: Record<string, { score: number; arrows: number }> = {};
	const maxScores = (target.length + 1) / 2;
	const rowScores = Array.from({ length: target.length }, (_, index) => {
		if (maxScores >= index + 1) return index + 1;
		return target.length - index;
	});
	const colScores = [...rowScores];

	for (let [rowIndex, row] of target.entries()) {
		console.log({ rowIndex, row });
		for (let [colIndex, char] of row.split('').entries()) {
			console.log({ colIndex, char });
			if (char === '*') continue;
			let { score, arrows } = counterScore[char] || {
				score: 0,
				arrows: 0,
			};
			const arrowsInPosition = isUpperCase(char) ? 2 : 1;
			arrows = arrows + arrowsInPosition;
			score =
				score +
				getPositionScore(rowScores[rowIndex], colScores[colIndex]) *
					arrowsInPosition;
			counterScore[char] = { score, arrows };
		}
	}
	console.log({ counterScore });
	return [];
}

const isUpperCase = (char: string) => char === char.toUpperCase();

const getPositionScore = (rowScore: number, colScore: number): number => {
	return rowScore * colScore;
};
