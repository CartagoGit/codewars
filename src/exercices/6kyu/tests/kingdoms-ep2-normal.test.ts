// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";
import { translate } from "../kingdoms-ep2-normal";



describe("Sample", function() {
   let examp:any[] = ["a**? *c*. **e,", ["ace", "acd", "abd"] ];
   it(`given ${JSON.stringify(examp[0])}, ${JSON.stringify(examp[1])}`, function() {
    assert.strictEqual(translate(examp[0], examp[1]), "abd? acd. ace,")
   });
    let a:any[] = ["m** ***e **s l*****", ["name", "myy", "legion", "iss"] ];
   it(`given ${JSON.stringify(a[0])}, ${JSON.stringify(a[1])}`, function() {
    assert.strictEqual(translate(a[0], a[1]), "myy name iss legion")
   });
    let b:any[] = ["*** **** **s *****n, f** **e *r* m***!", ["mmy", "name", "iss", "legion", "for", "wwe", "are", "many"] ];
   it(`given ${JSON.stringify(b[0])}, ${JSON.stringify(b[1])}`, function() {
    assert.strictEqual(translate(b[0], b[1]), "mmy name iss legion, for wwe are many!")
   });
    let c:any[] = ["*** **g *o* never **o **rment m*e!", ["demon", "mme", "hell", "spit", "iii", "pigg", "beg", "too", "you", "never", "torment", "exorcism"] ];
   it(`given ${JSON.stringify(c[0])}, ${JSON.stringify(c[1])}`, function() {
    assert.strictEqual(translate(c[0], c[1]), "iii beg you never too torment mme!")
   });
    let d:any[] = ["***! **ll? f*l*. he*l, fe*l? c*ll. ***t,", ["mel", "dell", "felt", "fill", "fell", "hell", "cell"] ];
   it(`given ${JSON.stringify(d[0])}, ${JSON.stringify(d[1])}`, function() {
    assert.strictEqual(translate(d[0], d[1]), "mel! dell? fill. hell, fell? cell. felt,")
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
       "fye*** w*eg **e ***z* ***s x*e*fg *****v eee*eu i** ***re **g*t* *e*", 
      ["eggete","fefffv","eeeeeu","fyefee","wfeg","iee","eefs","hee","hfe","efere","gegzf","xgeffg"]
      ];
    it(`given ${JSON.stringify(a[0])}, ${JSON.stringify(a[1])}`, function() {
    assert.strictEqual(translate(a[0], a[1]), "fyefee wfeg hfe gegzf eefs xgeffg fefffv eeeeeu iee efere eggete hee")
   });
})