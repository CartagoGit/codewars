//* https://www.codewars.com/kata/5c857bab20089d4fe65a7f5b/train/typescript

export function clean(array: any[]): any[] {
	return array.filter((_item, index) => array.hasOwnProperty(index));
}
