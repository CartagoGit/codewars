//* https://www.codewars.com/kata/57b5907920b104772c00002a/train/typescript

export function height(n: number): string {
	let height = 2000000;
    let lastCatHeight = height;
	for (let i = n; i > 0; i--) {
        lastCatHeight = lastCatHeight / 2.5;
		height = height + lastCatHeight;
	}
	return height.toFixed(3);
}