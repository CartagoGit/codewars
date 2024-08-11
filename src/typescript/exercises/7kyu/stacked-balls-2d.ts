// https://www.codewars.com/kata/5bb804397274c772b40000ca/train/typescript

export function stackHeight2d(layers: number) {
	if (!layers) return 0;
	const heigth =
		(Math.sqrt(Math.pow(layers, 2) - Math.pow(layers / 2, 2)) *
			(layers - 1) +
			layers) /
		layers;
	return heigth;
}
