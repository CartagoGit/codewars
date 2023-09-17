export const initCardsDrawOrder2 = () => {
	return prepareDeck(["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS"]);
};

export const prepareDeck = (drawnCards: string[]): string[] => {
	const deck: string[] = [];

	while (drawnCards.length > 0) {
		if (deck.length > 0) deck.unshift(deck.pop()!);
		deck.unshift(drawnCards.pop()!);
	}

	return deck;
};
