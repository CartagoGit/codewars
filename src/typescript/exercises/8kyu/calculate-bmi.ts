//* https://www.codewars.com/kata/57a429e253ba3381850000fb/train/typescript

export function bmi(weight: number, height: number): string {
	const bmi = weight / height ** 2;
	if (bmi <= 18.5) return 'Underweight';
	if (bmi <= 25) return 'Normal';
	if (bmi <= 30) return 'Overweight';
	return 'Obese';
}
