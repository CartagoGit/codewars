//* https://www.codewars.com/kata/569b5cec755dd3534d00000f/train/typescript

export function newAvg(arr: number[], newavg: number): number {
    const expectedDonation = newavg * (arr.length + 1) - arr.reduce((sum, value) => sum + value, 0);
    if (expectedDonation <= 0) throw new Error("Expected New Average is too low");
    return Math.ceil(expectedDonation);
}

