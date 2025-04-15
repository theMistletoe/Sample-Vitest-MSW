// sum.test.js
import { expect, test } from 'vitest'
import { sum } from '../../libs/sum'

test('adds 1 + 2 to equal 3', () => {
    // FIXME: This test is failing
    expect(sum(1, 2)).toBe(7)
})