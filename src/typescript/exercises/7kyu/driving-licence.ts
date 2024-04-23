//* https://www.codewars.com/kata/586a1af1c66d18ad81000134/train/typescript

const months = [ 'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec' ];

export function driver(data: Array<string>): string {
	let [firstName, midName, surName, birth, genere] = data;
	let [day, month, year] = birth.split('-');
	month = month.split('').slice(0, 3).join('');
	genere = genere.split('').slice(0, 1).join('');
	const firstRule = surName.split('').slice(0, 5).join('').padEnd(5, '9').toUpperCase();
	const secondRule = year.split('')[2];
    const monthStart = genere === 'M' ? 1 : 51;
    const thirdRule = (months.indexOf(month) + monthStart).toString().padStart(2, '0');
    const forthRule = day;
    const fifthRule = year.split('')[3];
    const sixthRule = 
        firstName.split('').slice(0, 1) + 
        (!!midName ? midName.split('').slice(0, 1).join('') : '9');
    const seventhRule = '9';
    const eighthRule = 'AA';
    return `${firstRule}${secondRule}${thirdRule}${forthRule}${fifthRule}${sixthRule}${seventhRule}${eighthRule}`;
}
