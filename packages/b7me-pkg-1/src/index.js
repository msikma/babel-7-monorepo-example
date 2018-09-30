// babel-7-monorepo-example - Package 1 <https://github.com/msikma/babel-7-monorepo-example>
// Copyright © 2018. MIT license.

import somethingUseful from 'b7me-pkg-2'
import { doSomethingFunny } from 'b7me-pkg-3'
import { test } from './a'

const main = () => {
  // main indexjs
  console.log('hi')
  console.log(test())
  console.log(somethingUseful())
  console.log(doSomethingFunny())
}

export default main
