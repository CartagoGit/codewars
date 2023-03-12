import { config, expect } from "chai";
import { prepareDeck } from "../cards-draw-order-2";

// Disable truncating the content of arrays when printing them on the console
config.truncateThreshold = 0;

describe("prepare kings and queens", () => {
	it("should return prepared deck for kings and queens", () => {
		const drawn = ["KC", "QC", "KD", "QD", "KH", "QH", "KS", "QS"];
		const deck = ["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS"];

		expect(prepareDeck(drawn)).to.deep.equal(deck);
	});
});
