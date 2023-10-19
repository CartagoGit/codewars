//* https://www.codewars.com/kata/590adadea658017d90000039/train/typescript

const posibilities = ['Jack','Queen','King','Bar','Cherry','Seven','Shell','Bell','Star','Wild'] as const;

export function fruit(reels: string[][], spins: number[]): number {
	const result = [reels[0][spins[0]], reels[1][spins[1]], reels[2][spins[2]]] as typeof posibilities[number][];
	const points = Math.max(
		...result.map((reel) => {
			const valuePossibility = posibilities.indexOf(reel ) + 1;
			const counter = result.filter((element) => element === reel).length;
			const hasWild = result.includes('Wild') && reel !== 'Wild';
			if (counter === 3) return valuePossibility * 10;
			else if (counter === 2) return valuePossibility * (hasWild ? 2 : 1);
			else return 0;
		})
	);
	return points;
}
