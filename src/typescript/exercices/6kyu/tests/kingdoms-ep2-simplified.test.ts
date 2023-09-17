// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";
import { translate } from "../kingdoms-ep2-simplified";


describe("Sample", function() {
    let a:any[] = ["***lo w***d!", ["hello", "world"] ];
   it(`given ${JSON.stringify(a[0])}, ${JSON.stringify(a[1])}`, function() {
    assert.strictEqual(translate(a[0], a[1]), "hello world!")
   });
    let b:any[] = ["c**l, w*ak!", ["hell", "cell", "week", "weak"] ];
   it(`given ${JSON.stringify(b[0])}, ${JSON.stringify(b[1])}`, function() {
    assert.strictEqual(translate(b[0], b[1]), "cell, weak!")
   });
    let c:any[] = ["hell*, w***d!", ["hello", "hell", "word", "world"] ];
   it(`given ${JSON.stringify(c[0])}, ${JSON.stringify(c[1])}`, function() {
    assert.strictEqual(translate(c[0], c[1]), "hello, world!")
   });
    let d:any[] = ["***", ["mel", "dell"] ];
   it(`given ${JSON.stringify(d[0])}, ${JSON.stringify(d[1])}`, function() {
    assert.strictEqual(translate(d[0], d[1]), "mel")
   });
    let e:any[] = ["", ["hell", "weak"] ];
   it(`given ${JSON.stringify(e[0])}, ${JSON.stringify(e[1])}`, function() {
    assert.strictEqual(translate(e[0], e[1]), "")
   });
    let f:any[] = ["****. ***,", ["aaa", "bbbb"] ];
   it(`given ${JSON.stringify(f[0])}, ${JSON.stringify(f[1])}`, function() {
    assert.strictEqual(translate(f[0], f[1]), "bbbb. aaa,")
   });
});

describe("New Edge", function() {
    let a:any[] = [
  "*ow ****v* **** ****u oq**y *t***. s*opq. qro***, q*x", 
  ["ooqqu","ptqqq","qqqovq","qpqq","qpx","oqqqy","qropoo","sqopq","qow"]
      ];
    it(`given ${JSON.stringify(a[0])}, ${JSON.stringify(a[1])}`, function() {
    assert.strictEqual(translate(a[0], a[1]), "qow qqqovq qpqq ooqqu oqqqy ptqqq. sqopq. qropoo, qpx")
   });
})