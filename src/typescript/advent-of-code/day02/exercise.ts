import { INPUT_DAY_02 } from './input';

type Cube = {
	red: number;
	green: number;
	blue: number;
};

export const initDay02 = (): number => {
	return getCubeConundrum(INPUT_DAY_02);
	// return getCubeConundrum(`Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
    // Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
    // Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
    // Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
    // Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`);
};

const getCubeConundrum = (input: string): number => {
	const maxCubes: Cube = {
		red: 12,
		green: 13,
		blue: 14,
	};
	const idPossibleGames: number[] = [];
	input.split('\n').forEach((line) => {
		const [game, setsChain] = line.split(':');
		const id = Number(game.trim().split(' ')[1]);
        console.log({id});
		const sets = setsChain.split(/;|,/);
		const settedQuantity: Cube = sets.reduce(
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
        console.log(settedQuantity, Object.entries(settedQuantity).every(
            ([key, value]) => value <= maxCubes[key as keyof Cube]
        ))
		if (
			Object.entries(settedQuantity).every(
				([key, value]) => value <= maxCubes[key as keyof Cube]
			)
		) {
			idPossibleGames.push(id);
		}
	});
    console.log(idPossibleGames);
	return idPossibleGames.reduce((acc, curr) => acc + curr, 0);
};
