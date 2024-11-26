//* https://www.codewars.com/kata/57dd3a06eb0537b899000a64/train/typescript

const song = [
	'On the 12th day of Christmas my true love gave to me',
	'12 drummers drumming,',
	'11 pipers piping,',
	'10 lords a leaping,',
	'9 ladies dancing,',
	'8 maids a milking,',
	'7 swans a swimming,',
	'6 geese a laying,',
	'5 golden rings,',
	'4 calling birds,',
	'3 French hens,',
	'2 turtle doves and ',
	'a partridge in a pear tree.',
];
export function comparator(a: string, b: string): number {
	const indexA = song.indexOf(a);
	const indexB = song.indexOf(b);
	return indexA < indexB ? 1 : indexA > indexB ? -1 : 0;
}
