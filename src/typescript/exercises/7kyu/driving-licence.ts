//* https://www.codewars.com/kata/586a1af1c66d18ad81000134/train/typescript

const months = [ 'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec' ];

export function driver(data: Array<string>): string {
	let [firstName, midName, surName, birth, genere] = data;
	let [day, month, year] = birth.split('-');
	month = month.split('').slice(0, 3).join('');
	genere = genere.split('').slice(0, 1).join('');
	const firstRule = firstName.split('').slice(0, 5).join('').padEnd(5, '9');
	const secondRule = year.split('')[2];
    const monthStart = genere === 'M' ? 1 : 51;
    const thirdRule = months.indexOf(month) + monthStart;
    

}
