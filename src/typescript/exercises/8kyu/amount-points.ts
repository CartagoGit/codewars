//* https://www.codewars.com/kata/5bb904724c47249b10000131/train/typescript

export function points(games: string[]): number {
	const getPoints = (game: string): number => {
		const [x, y] = game.split(':').map(Number);
		if (x > y) return 3;
		if (x < y) return 0;
		return 1;
	};
	return games.reduce((acc, game) => acc + getPoints(game), 0);
}
