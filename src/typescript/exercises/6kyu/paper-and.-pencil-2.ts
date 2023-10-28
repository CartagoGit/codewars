export const quadraticFormula = (
	y1: number,
	y2: number,
	y3: number
): [string, number, number] => {
	let formula = `x^2`;
	if (b !== 0) {
		formula += `+${y2}x`;
	}
	if (c !== 0) {
		formula += `+${c}`;
	}

	// Calcula los dos siguientes términos
	const fourthTerm = a + 2 * b + c;
	const fifthTerm = a + 3 * b + c;

	return [formula, fourthTerm, fifthTerm];
};

/* 
            y1 = a*1^2 + b*1 + c
            y2 = a*2^2 + b*2 + c
            y3 = a*3^2 + b*3 + c
            ...
            Resolve -> 
            y4 = a*4^2 + b*4 + c
            y5 = a*5^2 + b*5 + c
*/

// // Form the quadratic formula
// const formula = `x^2${b > 0 ? '+' + b + 'x' : b < 0 ? b + 'x' : ''}${
//     c > 0 ? '+' + c : c < 0 ? c : ''
// }`;

// // Calculate the fourth and fifth terms of the sequence
// const y4 = a * 4 * 4 + b * 4 + c;
// const y5 = a * 5 * 5 + b * 5 + c;

// return [formula, y4, y5];
