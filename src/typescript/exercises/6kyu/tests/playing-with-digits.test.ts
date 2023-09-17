
import { assert } from "chai";
import { G964 } from "../playing-with-digits";

function dotest(n: number, p: number, expected: number) {
    assert.equal(G964.digPow(n, p), expected, "Incorrect answer for n=" + n + ", p=" + p);
}

describe("Fixed Tests", function() {
    it("digPow", function() {
        dotest(89, 1, 1);
        dotest(92, 1, -1);
        dotest(114, 3, 9);
    });
});