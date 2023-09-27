//* https://www.codewars.com/kata/554a44516729e4d80b000012/train/typescript

export function nbMonths(
	priceOld: number,
	priceNew: number,
	savingPerMonth: number,
	percentLossByMonth: number
): number[] {
	let month = 0;
	let savings = 0;

	while (savings < priceNew - priceOld) {
		month++;
		savings += savingPerMonth;
		if (month % 2 === 0) percentLossByMonth += 0.5;

		priceOld -= priceOld * (percentLossByMonth / 100);
		priceNew -= priceNew * (percentLossByMonth / 100);
	}
	return [month, Math.round(priceOld + savings - priceNew)];
}
