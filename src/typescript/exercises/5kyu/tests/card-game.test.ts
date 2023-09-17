import { assert } from "chai";
import { cardGame } from "../card-game";



describe("Fixed Tests", function() {

  let entries : [bigint, bigint][] = [
    [10n, 8n],
    [4n, 3n],
    [5n, 2n],
    [12n, 9n],
    [100000000000n, 99999999950n],
  ];

  it("Sample Tests", function() {
    for(let [n, expected] of entries){
      let actual = cardGame(n),
          msg = `For n = ${n} `;
      assert.strictEqual(actual, expected, msg);
    }
  });

});