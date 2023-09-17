import { config, expect } from "chai";
import { draw } from "../cards-draw-order-1";

// Disable truncating the content of arrays when printing them on the console
config.truncateThreshold = 0;

describe("draw kings and queens", () => {
	it("should return kings and queens in order", () => {
		const deck = ["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS"];
		const drawn = ["KC", "QC", "KD", "QD", "KH", "QH", "KS", "QS"];

		expect(draw(deck)).to.deep.equal(drawn);
	});
});
