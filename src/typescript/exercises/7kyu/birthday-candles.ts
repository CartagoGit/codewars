//* https://www.codewars.com/kata/6630da20f925eb3007c5a498/train/typescript

export function blowCandles(str: string): number {
	const candles = str.split('').map(Number);
	let moves = 0;
	let position = 0;
	const blowSpace = 3;
	while (position < candles.length) {
		if (candles[position] === 0) {
			position++;
			continue;
		}
		candles[position] -= 1;
		if (position + 1 < candles.length) {
			candles[position + 1] =
				candles[position + 1] === 0 ? 0 : candles[position + 1] - 1;
		}
		if (position + 2 < candles.length) {
			candles[position + 2] =
				candles[position + 2] === 0 ? 0 : candles[position + 2] - 1;
		}
		moves++;
	}
	return moves;
}
