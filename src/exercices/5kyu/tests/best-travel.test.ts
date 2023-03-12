import { assert } from "chai";
import { chooseBestSum } from "../best-travel";

describe("Fixed Tests", function() {
  it("chooseBestSum", function() {
    assert.strictEqual(
      chooseBestSum(163, 3, [50, 55, 56, 57, 58]),
      163
    );

    assert.strictEqual(
      chooseBestSum(163, 3, [50]),
      null
    );

    assert.strictEqual(
      chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]),
      228
    );
  });
});

