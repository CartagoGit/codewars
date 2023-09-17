import { assert } from 'chai'
import { mixbonacci } from '../mixbonacci'


describe('Example Tests', () => {
  it('should work with example tests', () => {
    assert.deepStrictEqual(mixbonacci([], 10), [])
    assert.deepStrictEqual(mixbonacci(['fib'], 0), [])
    assert.deepStrictEqual(mixbonacci(['fib'], 10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
    assert.deepStrictEqual(mixbonacci(['pad'], 10), [1, 0, 0, 1, 0, 1, 1, 1, 2, 2])
    assert.deepStrictEqual(mixbonacci(['jac'], 10), [0, 1, 1, 3, 5, 11, 21, 43, 85, 171])
    assert.deepStrictEqual(mixbonacci(['pel'], 10), [0, 1, 2, 5, 12, 29, 70, 169, 408, 985])
    assert.deepStrictEqual(mixbonacci(['tri'], 10), [0, 0, 1, 1, 2, 4, 7, 13, 24, 44])
    assert.deepStrictEqual(mixbonacci(['tet'], 10), [0, 0, 0, 1, 1, 2, 4, 8, 15, 29])
    assert.deepStrictEqual(mixbonacci(['fib', 'tet'], 10), [0, 0, 1, 0, 1, 0, 2, 1, 3, 1])
    assert.deepStrictEqual(mixbonacci(['jac', 'jac', 'pel'], 10), [0, 1, 0, 1, 3, 1, 5, 11, 2, 21])
  })
})
