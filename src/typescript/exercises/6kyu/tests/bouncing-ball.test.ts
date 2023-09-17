
import { assert } from "chai";
import { bouncingBall } from "../bouncing-balls";

describe("Fixed Tests sumFracts", function() {
  it("Basic tests", function() {
    assert.strictEqual(bouncingBall(3.0, 0.66, 1.5), 3);
    assert.strictEqual(bouncingBall(30.0, 0.66, 1.5), 15);
    assert.strictEqual(bouncingBall(30, 0.75, 1.5), 21);
    assert.strictEqual(bouncingBall(30, 0.4, 10), 3);
  });
});