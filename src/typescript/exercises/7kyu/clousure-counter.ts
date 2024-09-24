//* https://www.codewars.com/kata/60edafd71dad1800563cf933/train/typescript

export function counter(): Function {
	let count = 1;
	return () => count++;
}
