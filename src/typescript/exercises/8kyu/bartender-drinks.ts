//* https://www.codewars.com/kata/568dc014440f03b13900001d/train/typescript

export function getDrinkByProfession(profession: string): string {
	const response: Record<string, string> = {
		jabroni: 'Patron Tequila',
		'school counselor': 'Anything with Alcohol',
		programmer: 'Hipster Craft Beer',
		'bike gang member': 'Moonshine',
		politician: 'Your tax dollars',
		rapper: 'Cristal',
		default: 'Beer',
	};
	return response[profession.toLowerCase()] || response.default;
}
