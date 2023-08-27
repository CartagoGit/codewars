//* https://www.codewars.com/kata/616eedc41d5644001ff97462/train/typescript

export function countAndSort(target: string[]): string[] {
	let counterScore: Record<string, { score: number; arrows: number }> = {};
	const maxScores = (target.length + 1) / 2;
	const positionScores = Array.from({ length: target.length }, (_, index) => {
		if (maxScores >= index + 1) return index + 1;
		return target.length - index;
	});

	for (let [rowIndex, row] of target.entries()) {
		for (let [colIndex, char] of row.split('').entries()) {
			if (char === '*') continue;
			const lowerChar = char.toLowerCase();
			let { score, arrows } = counterScore[lowerChar] || {
				score: 0,
				arrows: 0,
			};
			const arrowsInPosition = char === char.toUpperCase() ? 2 : 1;
			arrows = arrows + arrowsInPosition;
			const positionScore = Math.min(
				...[positionScores[rowIndex], positionScores[colIndex]]
			);
			score = positionScore * arrowsInPosition + score;
			counterScore[lowerChar] = { score, arrows };
		}
	}
	const finalResult = Object.entries(counterScore)
		.sort((a, b) => {
			const [nameA, { score: scoreA, arrows: arrowsA }] = a;
			const [nameB, { score: scoreB, arrows: arrowsB }] = b;
			if (scoreA !== scoreB) return scoreA - scoreB; // Ordeer score asc
			else if (arrowsA !== arrowsB)
				return arrowsB - arrowsA; // Order arrows desc
			else return nameA.localeCompare(nameB); // Order alphabetically
		})
		.map(([char]) => char);
	return finalResult;
}
