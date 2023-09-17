
import { assert } from 'chai';
import { decipherThis } from '../decipher-this';

const Test = {
  expect: (...args: any[]) => (assert as any)(...args),
  assertEquals: (...args: any[]) => (assert as any).equal(...args),
};

describe('decipherThis', () => {
  it('Have a go at this and see how you do', () => {
    Test.assertEquals(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'), 'Have a go at this and see how you do');
  });
});