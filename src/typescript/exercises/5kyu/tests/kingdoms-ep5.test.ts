import { assert } from "chai";
import { searchForFood } from "../kingdoms-ep5";



describe("Tests", function() {
    it("island0", function() {
      let island0 = [
        "5$.$5",
      ];
       assert.strictEqual(searchForFood(island0, [0, 2], 8), 10);
    })
    it("island1", function() {
      let island1 = [
         "111.",
         "1.1.",
         "112.",
      ];
       assert.strictEqual(searchForFood(island1, [0, 3], 2), 2);
       assert.strictEqual(searchForFood(island1, [2, 0], 2), 4);
       assert.strictEqual(searchForFood(island1, [1, 1], 0), 0);
       assert.strictEqual(searchForFood(island1, [2, 2], 0), 2);
    })
    it("island2", function() {
      let island2 = [
         ".....",
         ".1.1.",
         "5$.1.",
         ".112.",
         "....."
      ];
       assert.strictEqual(searchForFood(island2, [4, 2], 3), 4);
       assert.strictEqual(searchForFood(island2, [1, 2], 5), 7);
       assert.strictEqual(searchForFood(island2, [2, 4], 2), 3);
    })
    it("island3", function() {
      let island3 = [
         "7....",
         "$....",
         "$...1",
         ".1111",
      ];
       assert.strictEqual(searchForFood(island3, [3, 0], 5), 8);
       assert.strictEqual(searchForFood(island3, [0, 4], 1), 0);
       assert.strictEqual(searchForFood(island3, [3, 0], 3), 3);
       assert.strictEqual(searchForFood(island3, [2, 0], 4), 7);
    })
    it("island4", function() {
      let island4 = [
         "1.2",
         "...",
         "...",
      ];
        assert.strictEqual(searchForFood(island4, [1, 1], 4), 3);
    })
    it("new edge island", function() {
      let newEdgeIsland = [
         "..5.$...............",
         ".$....48..$8.$$8.$..",
         "...2$$8.$$..$1......",
         ".....$1.....$1......",
         ".4........2..1$.4.$.",
         "2..1$.4.$...........",
         "$5$...31.62..1$.4.$.",
         "............2$$8....",
         ".....$....2..1$.4.$.",
         "..........2..1$.4.$.",
         ".4........2..1$.4.$.",
         "2..1$.4.$...........",
         "$5$...31.62..1$.4.$.",
         ".4........2..1$.4.$.",
         "2..1$.4.$...........",
         "$5$...31.62..1$.4.$.",
         ".4........2..1$.4.$.",
         "2..1$.4.$...........",
         "$5$...31.62..1$.4.$.",
      ];
        assert.strictEqual(searchForFood(newEdgeIsland, [2, 7], 9), 29);
    })
});