//* https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/typescript

// Recupera un array con los numeros positivos de un array de numeros sin repetir
export const distinct = (a: number[]): number[] => {
	return a.filter((item, index) => a.indexOf(item) === index && item >= 0);
};
