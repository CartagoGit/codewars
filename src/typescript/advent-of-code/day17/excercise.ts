import { INPUT_DAY_17 } from './input';

export const initDay17 = (): number => {
	return getClumsyCrucible(INPUT_DAY_17);
};

const getClumsyCrucible = (input: string): number => {
	const lavaPool: number[][] = input.split('\n').map((line) =>
		line
			.trim()
			.split('')
			.map((char) => Number(char))
	);
	return 0;
};
