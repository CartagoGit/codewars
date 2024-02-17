//* https://www.codewars.com/kata/5a53a17bfd56cb9c14000003/train/typescript

export function disariumNumber(n: number) {
	return `${n}`
		.split('')
		.reduce((acc, cur, i) => acc + Math.pow(Number(cur), i + 1), 0) === n
		? 'Disarium !!'
		: 'Not !!';
}
