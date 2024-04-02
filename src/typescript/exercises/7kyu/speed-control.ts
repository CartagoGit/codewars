//* https://www.codewars.com/kata/56484848ba95170a8000004d/train/typescript

export const gps = (s: number, xs: number[]): number => {
	if (xs.length <= 1) return 0;
	let maxSpeed = 0;
	for (let i = 0; i < xs.length - 1; i++) {
		const deltaDistance = xs[i + 1] - xs[i];
		const speed = (3600 * deltaDistance) / s;
		maxSpeed = Math.max(maxSpeed, speed);
	}
	return Math.floor(maxSpeed);
};
