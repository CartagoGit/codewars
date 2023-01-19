import { assert } from 'chai'
import { zozonacci } from './solution'

describe('Example Tests', () => {
  it('should work with example tests', () => {
    assert.deepStrictEqual(zozonacci([], 10), [])
    assert.deepStrictEqual(zozonacci(['fib'], 0), [])
    assert.deepStrictEqual(zozonacci(['fib'], 10), [0, 0, 0, 1, 1, 2, 3, 5, 8, 13])
    assert.deepStrictEqual(zozonacci(['tri'], 10), [0, 0, 0, 1, 1, 2, 4, 7, 13, 24])
    assert.deepStrictEqual(zozonacci(['tet'], 10), [0, 0, 0, 1, 1, 2, 4, 8, 15, 29])
    assert.deepStrictEqual(zozonacci(['pad'], 10), [0, 1, 0, 0, 1, 0, 1, 1, 1, 2])
    assert.deepStrictEqual(zozonacci(['pel'], 10), [0, 0, 0, 1, 2, 5, 12, 29, 70, 169])
    assert.deepStrictEqual(zozonacci(['jac'], 10), [0, 0, 0, 1, 1, 3, 5, 11, 21, 43])
    assert.deepStrictEqual(zozonacci(['fib', 'tri'], 10), [0, 0, 0, 1, 1, 2, 3, 6, 9, 18])
    assert.deepStrictEqual(zozonacci(['tri', 'fib'], 10), [0, 0, 0, 1, 1, 2, 4, 6, 12, 18])
    assert.deepStrictEqual(zozonacci(['pad', 'fib'], 10), [0, 1, 0, 0, 1, 1, 1, 2, 2, 4])
    assert.deepStrictEqual(zozonacci(['tri', 'tet'], 10), [0, 0, 0, 1, 1, 2, 4, 8, 14, 28])
    assert.deepStrictEqual(zozonacci(['fib', 'pel', 'tri'], 10), [0, 0, 0, 1, 1, 3, 5, 8, 21, 34])
    assert.deepStrictEqual(zozonacci(['tet', 'jac'], 10), [0, 0, 0, 1, 1, 3, 5, 11, 20, 42])
  })
})
