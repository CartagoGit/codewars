
import {assert,config} from "chai";
import { prod2sum } from "../recreation-two";
config.truncateThreshold = 0

function testing(a:number, b:number, c:number, d:number, expected:number[][]) {
    assert.deepEqual(prod2sum(a, b, c, d), expected);
}

describe("Fixed Tests", function() {
    it("Basic tests prod2sum", function() {
        testing(1, 2, 1, 3, [[1, 7], [5, 5]]);
        testing(2, 3, 4, 5, [[2, 23], [7, 22]]);
        testing(1, 2, 2, 3, [[1, 8], [4, 7]]);
        testing(1, 1, 3, 5, [[2, 8]]);
        // testing()
    });
});
