//* https://www.codewars.com/kata/58373ba351e3b615de0001c3/train/typescript



export function MormonsWhile(
	startingNumber: number,
	reach: number,
	target: number
): number {
	if (startingNumber >= target) return 0;
    let followers = 1;
    while(startingNumber + reach * startingNumber < target) {
        followers++;
        startingNumber += reach * startingNumber;

    }
	return followers;
}
