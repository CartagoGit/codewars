//* https://www.codewars.com/kata/58373ba351e3b615de0001c3/train/typescript

export function MormonsWhile(
	startingNumber: number,
	reach: number,
	target: number
): number {
	if (startingNumber >= target) return 0;
	let followers = 1;
	while (startingNumber + reach * startingNumber < target) {
		followers++;
		startingNumber += reach * startingNumber;
	}
	return followers;
}

export function MormonsAddingParam(
	startingNumber: number,
	reach: number,
	target: number,
	followers: number = 1
): number {
	if (startingNumber >= target) return 0;
	if (startingNumber + reach * startingNumber < target)
		return MormonsAddingParam(
			startingNumber + reach * startingNumber,
			reach,
			target,
			followers + 1
		);
	return followers;
}

export const Mormons = (
	startingNumber: number,
	reach: number,
	target: number
): number => {
	return startingNumber >= target
		? 0
		: Mormons(
				startingNumber + reach * startingNumber,
				reach,
				target
		  ) + 1;
};
