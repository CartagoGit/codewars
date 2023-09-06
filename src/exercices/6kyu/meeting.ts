//* https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/typescript

export function meeting(chain: string): string {
	const list = chain
		.split(';')
		.map((person) => person.toUpperCase().split(':'))
		.sort(([aName, aSurname], [bName, bSurname]) => {
			if (aSurname > bSurname) return 1;
			if (aSurname < bSurname) return -1;
			if (aName > bName) return 1;
			if (aName < bName) return -1;
			return 0;
		})
		.reduce((acc, [name, surname]) => acc + `(${surname}, ${name})`, '');
	return  list;
}
