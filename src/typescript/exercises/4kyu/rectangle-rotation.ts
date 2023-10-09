//* https://www.codewars.com/kata/5886e082a836a691340000c3/train/typescript

export function rectangleRotation(a: number, b: number): number {
	//* Calculate the distances from the origin to the points where the diagonals of the rectangle intersect the X and Y axis before rotation
	const diagonalIntersectX = Math.floor(Math.sqrt((a * a) / 2));
	const diagonalIntersectY = Math.floor(Math.sqrt((b * b) / 2));
	//* Calculate half of the sum of `diagonalIntersectX` and `diagonalIntersectY`, corresponding to the points along the diagonals of the rectangle
	const midDiagonalPoints = Math.floor(
		(diagonalIntersectX + diagonalIntersectY) / 2
	);
	//* Calculate the number of points in the inscribed square before rotation
	const pointsInInscribedSquare = diagonalIntersectX * diagonalIntersectY;
	//* Calculate the total number of points within the rectangle in one semi-plane (e.g. the right semi-plane) after rotation
	const pointsInOneSemiPlane = pointsInInscribedSquare + midDiagonalPoints;
	//* Double `pointsInOneSemiPlane` to count the points in both semi-planes, and add 1 to include the origin
	const totalPoints = pointsInOneSemiPlane * 2 + 1;
	return totalPoints;
}
