// import { printDeck } from "./preloaded";

export const initCardsDrawOrder1 = () => {
	return draw(["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS"]);
};

export const draw = (deck: string[]): string[] => {
	let drawnCards: string[] = [];
	while (deck.length > 0) {
		drawnCards.push(deck.shift()!);
		deck[deck.length - 1] = deck.shift()!;
	}
	return drawnCards;
};
