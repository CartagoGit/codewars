//* https://www.codewars.com/kata/5a58ca28e626c55ae000018a/train/typescript

export function areaOfPolygonInsideCircle(
	circleRadius: number,
	numberOfSides: number
): number {
	if (numberOfSides < 3) return 0;
	const centralAngle = (2 * Math.PI) / numberOfSides;
	const apothem = circleRadius * Math.cos(centralAngle / 2);
	const sideLength = 2 * apothem * Math.tan(centralAngle / 2);
	const area = (numberOfSides * sideLength * apothem) / 2;

	// Round 3 decimals
	const numDecimals = 3;
	const decimalsPow10 = Math.pow(10, numDecimals);
	const result = Math.round(area * decimalsPow10) / decimalsPow10;
	return result;
}
