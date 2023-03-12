// import { printDeck } from "./preloaded";

export const draw = (deck: string[]): string[] => {
	// printDeck(deck, true); // Using unicode characters
	// printDeck(deck, false); // Using regular characters

	console.log(deck);
	let drawnCards: string[] = [];
	while (deck.length > 0) {
		drawnCards.push(deck.shift()!);
		deck[deck.length - 1] = deck.shift()!;
	}

	return drawnCards;
};
