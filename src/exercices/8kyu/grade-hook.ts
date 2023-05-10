//* https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/typescript

export function getGrade(a: number, b: number, c: number): string {
	const average = (a + b + c) / 3;
	const grades: Record<number, string> = {
		90: "B",
		80: "C",
		70: "D",
		60: "F",
	};
	const limit = Number(
		Object.keys(grades).find((key) => average < Number(key))
	);
	return isNaN(limit) ? "A" : grades[limit];
}
