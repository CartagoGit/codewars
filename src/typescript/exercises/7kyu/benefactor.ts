//* https://www.codewars.com/kata/569b5cec755dd3534d00000f/train/typescript

export function newAvg(arr: number[], newavg: number): number {
	if (!arr?.length) return -1;
	const currentAvg = arr.reduce((sum, value) => sum + value, 0) / arr.length;
    if (newavg <= currentAvg) throw new Error("Expected New Average is too low");
	const precision = 10 ** -10; // Ajustar según sea necesario
    const expectedDonation = ((newavg - currentAvg) * (arr.length + 1)) + precision;
    return Math.ceil(expectedDonation);
}
