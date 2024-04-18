//* https://www.codewars.com/kata/5aca48db188ab3558e0030fa/train/typescript

export function calcType(a: number, b: number, res: number): string {
	if (a + b === res) return 'addition';
	else if (a - b === res) return 'subtraction';
	else if (a * b === res) return 'multiplication';
	else return 'division'; 
}
