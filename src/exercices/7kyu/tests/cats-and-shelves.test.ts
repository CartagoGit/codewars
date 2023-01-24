import { assert } from "chai";
import { catsAndShelves } from "../cats-and-shelves";

describe("Mew tests", function () {
	it("Start 1, finish 5", () => assert.strictEqual(catsAndShelves(1, 5), 2));
	it("Start 3, finish 3", () => assert.strictEqual(catsAndShelves(3, 3), 0));
	it("Start 2, finish 4", () => assert.strictEqual(catsAndShelves(2, 4), 2));
});
