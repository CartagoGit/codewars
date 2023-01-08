import { assert } from "chai";
import { brainLuck } from "../brain-luck";

describe("brainLuck", () => {
	it("Echo until byte(255) encountred", () => {
		assert.equal(
			brainLuck(",+[-.,+]", "Codewars" + String.fromCharCode(255)),
			"Codewars"
		);
	});

	it("Echo until byte(0) encountred", () => {
		assert.equal(
			brainLuck(",[.[-],]", "Codewars" + String.fromCharCode(0)),
			"Codewars"
		);
	});

	it('Two numbers multiplier', () => {
	  assert.equal(
	    brainLuck(',>,<[>[->+>+<<]>>[-<<+>>]<<<-]>>.', String.fromCharCode(8,9)),
	    String.fromCharCode(72)
	  );
	});
});
