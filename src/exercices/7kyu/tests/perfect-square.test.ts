import isSquare from "../perfect-square";
import { expect } from "chai";

describe("solution", function () {
	it("should work for some examples", function () {
		expect(isSquare(-1)).to.be.false;
		expect(isSquare(0)).to.be.true;
		expect(isSquare(3)).to.be.false;
		expect(isSquare(4)).to.be.true;
		expect(isSquare(25)).to.be.true;
		expect(isSquare(26)).to.be.false;
	});
});
