//* https://www.codewars.com/kata/5ce969ab07d4b7002dcaa7a1/train/typescript

export function solve(chain: string) {
	for (let i = Math.ceil(chain.length / 2); i < chain.length; i++) {
		if (chain.startsWith(chain.slice(i))) return chain.slice(i).length;
	}
	return 0;
}
