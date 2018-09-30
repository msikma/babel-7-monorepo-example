// babel-7-monorepo-example - Package 1 <https://github.com/msikma/babel-7-monorepo-example>
// Copyright © 2018. MIT license.

import { test } from './a'

describe('test function', () => {
  describe('the return value', () => {
    it('is not 3', () => expect(test()).not.toBe(1))
  })
})
