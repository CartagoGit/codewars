//* https://www.codewars.com/kata/60edafd71dad1800563cf933/train/typescript

export function counter(): Function {
	let counter = 1;
	return () => counter++;
}
