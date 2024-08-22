//* https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/typescript

export function humanYearsCatYearsDogYears(
	humanYears: number
): [number, number, number] {
	let [catYears, dogYears] = [0, 0];
	for (let i = 0; i < humanYears; i++) {
		if (i === 0) {
			catYears += 15;
			dogYears += 15;
		} else if (i === 1) {
			catYears += 9;
			dogYears += 9;
		} else {
			catYears += 4;
			dogYears += 5;
		}
	}
	return [humanYears, catYears, dogYears];
}
