//*  https://www.codewars.com/kata/52a382ee44408cea2500074c/train/typescript

export function determinant(matrix: number[][]): number {
	const size = matrix.length;
	if (size === 1) return matrix[0][0];
	if (size === 2)
		return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
	let result = 0;
	for (let row = 0; row < size; row++) {
		const subMatrix: number[][] = [];
		for (let subRow = 1; subRow < size; subRow++) {
			const subMatrixRow = [
				...matrix[subRow].slice(0, row),
				...matrix[subRow].slice(row + 1),
			];
			subMatrix.push(subMatrixRow);
		}
		const sign = row % 2 === 0 ? 1 : -1;
		result += sign * matrix[0][row] * determinant(subMatrix);
	}
	return result;
}
