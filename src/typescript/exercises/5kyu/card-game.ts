export const initCardGame = () => {
	// return cardGame(10n);
	return cardGame(4n);
};

export function cardGame(n: bigint): bigint {
	if (n < 1 || n > 10 ** 18) throw "n must be between 1 and 10^18";

	let players: Record<"alice" | "bob", bigint> = {
		alice: 0n,
		bob: 0n,
	};
	let isTurnAlice: boolean = true;

	while (n > 0n) {
		const player = isTurnAlice ? "alice" : "bob";
		// even
		if (n % 2n === 0n) {
			const half = n / 2n;
			const isHalfEven = half % 2n === 0n;
			if (!isHalfEven || half <= 2n) {
				players[player] += half;
				n = n - half;
				isTurnAlice = !isTurnAlice;
				continue;
			}
		}
		// odd or he/she doesnt take half cards
		players[player]++;
		n--;

		console.log({ isTurnAlice, players, n });
		isTurnAlice = !isTurnAlice;
	}

	return players.alice;
}
