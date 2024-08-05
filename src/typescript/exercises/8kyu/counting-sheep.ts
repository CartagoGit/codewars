//* https://www.codewars.com/kata/54edbc7200b811e956000556/train/typescript

export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
	return arrayOfSheep.filter((sheep) => !!sheep).length;
}
