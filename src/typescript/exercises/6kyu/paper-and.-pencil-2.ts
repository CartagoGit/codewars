//* https://www.codewars.com/kata/63bd8cc3a78e0578b608ac80/train/typescript

/* 
            RESOLUTION ->

            y1 = Math.pow(a*1,2) + b*1 + c
            y2 = Math.pow(a*2,2) + b*2 + c
            y3 = Math.pow(a*3,2) + b*3 + c
            ...
            Resolve -> 
            y4 = Math.pow(a*4,2) + b*4 + c
            y5 = Math.pow(a*5,2) + b*5 + c


            ---> y1
            y1 = 1 + b + c
            y1 - 1 = b + c
            b = y1 - 1 - c <--- This is the solution for b
            c = y1 - 1 - b
            
            ---> y2
            y2 = 4 + 2b + c
            y2 - 4 = 2b + c
            y2 - 4 - c = 2b
            b = (y2 - 4 - c) / 2
            
            ---> y3
            y3 = 9 + 3b + c
            y3 - 9 = 3b + c
            y3 - 9 - c = 3b
            b = (y3 - 9 - c) / 3
            
            ---> equal b
            (y2 - 4 - c) / 2 = (y3 - 9 - c) / 3
            3(y2 - 4 - c) = 2(y3 - 9 - c)
            3y2 - 12 - 3c = 2y3 - 18 - 2c
            3y2 - 2y3 - 12 + 18 = 3c - 2c
            c = 3*y2 - 2*y3 + 6

            --> Other probe equal b without y3 <- ¿¿¿???
            (y1 - 1 - c) = (y2 - 4 - c) / 2
            2(y1 - 1 - c) = y2 - 4 - c
            2y1 - 2 - 2c = y2 - 4 - c
            2y1 - y2 - 2 + 4 = 2c - c
            c = 2*y1 - y*2 + 2 <--- This is the solution for c
*/

export const quadraticFormula = (
	y1: number,
	y2: number,
	_y3: number // <- Is it necessary? Not really
): [string, number, number] => {
	const a = 1;

	//* Some solution
	// const c = 3 * y2 - 2 * y3 + 6;
	// const b = (y2 - 4 - c) / 2;

	//* Other solution without y3
	const c = 2 * y1 - y2 + 2;
	const b = y1 - 1 - c;

	const formula = getFormula(b, c);
	const y4 = Math.pow(a * 4, 2) + b * 4 + c;
	const y5 = Math.pow(a * 5, 2) + b * 5 + c;

	return [formula, y4, y5];
};

const getFormula = (b: number, c: number) => {
	const sign = (n: number) => (n > 0 ? '+' : '-');
	let res = 'x^2';
	if (b) res += sign(b) + (Math.abs(b) === 1 ? '' : Math.abs(b)) + 'x';
	if (c) res += sign(c) + Math.abs(c);
	return res;
};
