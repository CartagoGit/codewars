//* https://www.codewars.com/kata/6171a85207ab6b003fadc43e/train/typescript

import { assert } from "chai";
import { figureOut } from "../kingdoms-ep4";



describe("Fixed", function() {
   it("Normal", function() {
    assert.strictEqual(figureOut(["a b", " ba"]), "a");
    assert.strictEqual(figureOut(["ab kl", "ba kl", "a blk"]), "b");
    assert.strictEqual(figureOut(["icwth", "wicth", "witch"]), "w");
    assert.strictEqual(figureOut(["abcdef", "abcfde"]), "f");
    assert.strictEqual(figureOut(["a  b  c", "a b  c ", " ba   c"]), "a");
    assert.strictEqual(figureOut(["bc  x", " bcx ", " xbc "]), "x");
    assert.strictEqual(figureOut(["abcd", "cabd"]), "c");
    assert.strictEqual(figureOut(["xyz", "yxz", "zyx"]), "z");
    assert.strictEqual(figureOut([" x y z ", " xy  z ", "yx   z ", " xy  z "]), "y");
    assert.strictEqual(figureOut(["hop", "hpo", "pho"]), null);
   });
   it("New Edge", function() {
    assert.strictEqual(figureOut(["abdgefc", "adbegcf", "daebgfc", "adegfcb", "aedfgbc", "adegfcb", "dagecfb", "adegfcb", "adgefbc"]), "b");
    assert.strictEqual(figureOut(["dac   b ", "acd    b", "adc    b", "acd   b ", "ca d   b", "c ad  b ", "c ad  b ", " ca db  ", " ac bd  "]), "d");
    assert.strictEqual(figureOut(["cb feg da", "bcf ge ad", "cbfg ea d", "cfb gae d", "fcbga e d", "fbcag  ed", "bfac ged ", "baf cgde "]), null);   
   });
});
