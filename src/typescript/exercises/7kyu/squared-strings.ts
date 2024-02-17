//* https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/typescript

export function vertMirror(chain: string): string {
	return chain
		.split('\n')
		.map((line) => line.split('').reverse().join(''))
		.join('\n');
}
export function horMirror(chain: string): string {
	return chain.split('\n').reverse().join('\n');
}
export function oper(
	fct: (funcChain: string) => string,
	chain: string
): string {
	return fct(chain);
}
