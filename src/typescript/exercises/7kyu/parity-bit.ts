//* https://www.codewars.com/kata/5df261342964c80028345a0a/train/typescript

export function checkParity(parity: string, bin: string): number {
	let onesCount = bin.split('').filter((bit) => bit === '1').length;
	if (parity === 'even') {
		// Si se desea paridad par y hay un número impar de unos, se agrega un uno
		return onesCount % 2 !== 0 ? 1 : 0;
	} else {
		// Si se desea paridad impar y hay un número par de unos, se agrega un uno
		return onesCount % 2 === 0 ? 1 : 0;
	}
}
