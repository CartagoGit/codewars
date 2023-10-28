//* https://www.codewars.com/kata/63bd8cc3a78e0578b608ac80/train/typescript

export const quadraticFormula = (
	first: number,
	second: number,
	third: number
): [string, number, number] => {
    let a = second - first;
    let b = third - second - a;
    let c = first - a - b;
    let formula = `x^2${b>=0?'+':''}${b}x${c>=0?'+':''}${c}`;
    
    let fourth = (4 * 4) + (b * 4) + c;
    let fifth = (5 * 5) + (b * 5) + c;
    
    return [formula, fourth, fifth];
}