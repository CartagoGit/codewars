//* https://www.codewars.com/kata/5ce969ab07d4b7002dcaa7a1/train/typescript

export function solve(chain: string) {
	// const lastIndex = chain.lastIndexOf(chain[0]);
	// if ([-1, 0].includes(lastIndex)) return 0;
	// const fromLastChain = chain.slice(lastIndex);
	// const fromFirstChain = chain.slice(0, fromLastChain.length);
	// console.log({ chain, lastIndex, fromLastChain, fromFirstChain });
	// return fromFirstChain === fromLastChain ? fromLastChain.length : 0;
	for (let i = 1; i < chain.length; i++) {
        console.log({ i, chain: chain.slice(i), startsWith: chain.startsWith(chain.slice(i)) });
		if (chain.startsWith(chain.slice(i))) return chain.slice(i).length;
	}
    return 0;
}
