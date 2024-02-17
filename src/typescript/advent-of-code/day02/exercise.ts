import { INPUT_DAY_02 } from './input';

type Cube = {
	red: number;
	green: number;
	blue: number;
};

export const initDay02 = (): number => {
	return getCubeConundrum(INPUT_DAY_02);
};

const getCubeConundrum = (input: string): number => {
	const maxCubes: Cube = {
		red: 12,
		green: 13,
		blue: 14,
	};
	const idPossibleGames: number[] = [];
	for (let line of input.split('\n')) {
		const [game, setsChain] = line.split(':');
		const id = Number(game.trim().split(' ')[1]);
		const sets = setsChain.split(';');
		const isPossible = sets.every((set) => {
			const pairString = set.split(',');
			const setCube = pairString.reduce(
				(acc, curr) => {
					const [quantity, color] = curr.trim().split(' ') as [
						string,
						keyof Cube
					];
					const accQuantity = acc[color] + Number(quantity);
					return { ...acc, [color]: accQuantity };
				},
				{
					red: 0,
					green: 0,
					blue: 0,
				}
			);
			return Object.entries(setCube).every(
				([key, color]) => color <= maxCubes[key as keyof Cube]
			);
		});
		if (isPossible) {
			idPossibleGames.push(id);
		}
	}
	return idPossibleGames.reduce((acc, curr) => acc + curr, 0);
};
