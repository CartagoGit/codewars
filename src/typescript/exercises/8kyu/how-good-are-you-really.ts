//* https://www.codewars.com/kata/5601409514fc93442500010b/train/typescript

export const betterThanAverage = (
	classPoints: number[],
	yourPoints: number
): boolean => {
	return (
		yourPoints >
		classPoints.reduce((acc, point) => acc + point, yourPoints) /
			(classPoints.length + 1)
	);
};
