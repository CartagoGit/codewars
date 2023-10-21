//* https://www.codewars.com/kata/55f3da49e83ca1ddae0000ad/train/typescript

export const tankvol = (
	height: number,
	diameter: number,
	volumeTotal: number
): number => {
	const radius = diameter / 2;
	const tankLong = volumeTotal / (Math.PI * radius * radius);
	const theta = 2 * Math.acos((radius - height) / radius);
	const liquidArea = (radius * radius * (theta - Math.sin(theta))) / 2;
	const liquidVol = liquidArea * tankLong;
	return Math.floor(liquidVol);
};
