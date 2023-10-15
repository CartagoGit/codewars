//* https://www.codewars.com/kata/5384df88aa6fc164bb000e7d/train/typescript

export class Player {
	constructor(_: number) {}

	public firstmove = (cakes: number): boolean =>
		!(cakes < 3 || cakes % 4 === 2);

	public move = (cakes: number, last: number): number => {
		if (cakes < 3) return last === 1 ? 2 : 1;
		let nextMove = (cakes - 2) % 4;
		if (nextMove === 0 || nextMove === last)
			nextMove = last < 3 ? last + 1 : last - 1;
		return nextMove;
	};
}
