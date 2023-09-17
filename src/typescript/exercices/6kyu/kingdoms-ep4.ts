//* https://www.codewars.com/kata/6171a85207ab6b003fadc43e/train/typescript

export function figureOut(arr: string[]): string | null {
	let witch: null | string = null;
	for (let [indexValue, value] of arr.entries()) {
		if (indexValue === 0) continue;
		const previousValue = arr[indexValue - 1];
		const charactersFromValue = value.split('');
		for (let [charIndex, char] of charactersFromValue.entries()) {
			if(char === ' ') continue;
			const prevPosibilities = {
				equal: char === previousValue[charIndex],
				prev:
					charIndex === 0
						? false
						: char === previousValue[charIndex - 1],
				next:
					charIndex === charactersFromValue.length - 1
						? false
						: char === previousValue[charIndex + 1],
			};
			if (Object.values(prevPosibilities).some((value) => value))
				continue;
			witch = char;
			return witch;
		}
	}
	return witch;
}
