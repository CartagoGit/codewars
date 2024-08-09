//* https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/typescript

export function filter_list(l: Array<any>): Array<number> {
	return l.filter((el) => typeof el === 'number');
}
