// babel-7-monorepo-example - Package 1 <https://github.com/msikma/babel-7-monorepo-example>
// Copyright © 2018. MIT license.

import somethingUseful from './index'

describe('test function', () => {
  describe('the return value', () => {
    it('is useful', () => expect(somethingUseful()).toBe('useful!!!'))
  })
})
