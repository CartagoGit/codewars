//* https://www.codewars.com/kata/58e0cb3634a3027180000040/train/typescript

export function sortByValueAndIndex(array: number[]): number[] {
    let map : Record<number, {prod: number, value: number}> = {};
    for(let [index, value] of array.entries()){
        map[index] = {prod: value * (index + 1), value};
    }
    let result : number[] = Object.
	return Object.entries(map).
}
