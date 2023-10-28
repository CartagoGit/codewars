//* https://www.codewars.com/kata/63bd8cc3a78e0578b608ac80/train/typescript

/* 
            y1 = Math.pow(a*1,2) + b*1 + c
            y2 = Math.pow(a*2,2) + b*2 + c
            y3 = Math.pow(a*3,2) + b*3 + c
            ...
            Resolve -> 
            y4 = Math.pow(a*4,2) + b*4 + c
            y5 = Math.pow(a*5,2) + b*5 + c
*/


export const quadraticFormula = (
	y1: number,
	y2: number,
	y3: number
): [string, number, number] => {
	const a = 1;
	const b = (y2 - y1) / (2 * (2 - 1));
	const c = y1 - b * (1 * 1) - 1 * 1 * (1 * 1);

	const formula = getFormula(b, c);
	const y4 = Math.pow(a * 4, 2) + b * 4 + c;
	const y5 = Math.pow(a * 5, 2) + b * 5 + c;

	return [formula, y4, y5];
};

const getFormula = (b: number, c: number) => {
	let bString = '';
	if (b > 1) bString = `+${b}x`;
	else if (b === 1) bString = '+x';
	else if (b < 0) bString = `${b}x`;
	let cString = c === 0 ? '' : c > 0 ? `+${c}` : `${c}`;
	return `x^2${bString}${cString}`;
};


