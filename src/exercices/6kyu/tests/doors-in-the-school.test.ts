// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

import { doors } from "../doors-in-the-school";

// TODO Add your tests here
describe("Basic tests", function() {
  it("test for n=5", function() {
    assert.strictEqual(doors(5), 2)
  });
  it("test for n=10", function() {
    assert.strictEqual(doors(10), 3)
  });
  it("test for n=100", function() {
    assert.strictEqual(doors(100), 10)
  });
});

