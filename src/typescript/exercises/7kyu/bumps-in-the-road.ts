//* https://www.codewars.com/kata/57ed30dde7728215300005fa/train/typescript

export function bump(x: string): string {
	return x.split('').filter((char) => char === 'n').length > 15
		? 'Car Dead'
		: 'Woohoo!';
}
