//* https://www.codewars.com/kata/51fc12de24a9d8cb0e000001/train/typescript

//  (arr[0]*1 + arr[1]*2 + arr[2]*3 + arr[3]*4 + arr[4]*5 + arr[5]*6 + arr[6]*7 + arr[7]*8 + arr[8]*9 + arr[9]*10 +) % 11 === 0

export function validISBN10(isbn: string): boolean {
	if (
		isbn.length !== 10 || // ISBN must be 10 digits long
		isNaN(Number(isbn.slice(0, isbn.length - 1))) || // first 9 digits must be numbers
		(isbn[isbn.length - 1].toLowerCase() !== 'x' &&
			isNaN(Number(isbn[isbn.length - 1]))) // last digit must be a number or 'X'
	) {
		return false;
	}
	const isbnArr = isbn
		.split('')
		.map((char, i) => (char.toLowerCase() === 'x' ? 10 : parseInt(char, 10)));
	const result =
		isbnArr.reduce((acc, curr, i) => acc + curr * (i + 1), 0) % 11;
	return result === 0;
}
