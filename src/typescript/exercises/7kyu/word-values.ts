//* https://www.codewars.com/kata/598d91785d4ce3ec4f000018/train/typescript

export function wordValue(arr: string[]) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	return arr.map((word, index) => {
		return (
			word.split('').reduce((acc, char) => {
				const charValue = alphabet.indexOf(char) + 1;
				return acc + charValue;
			}, 0) *
			(index + 1)
		);
	});
}
