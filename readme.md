## Babel 7/Jest/Eslint monorepo example

This is an example of how to set up a monorepo with Babel 7, Eslint and Jest. It's designed for Node projects, rather than code that runs in the browser. It uses Yarn's native [workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) feature rather than Lerna.

All packages are transpiled from `src` to `lib`; `lib` is ignored by all tools but the only thing that gets published to npm.

### Usage

Install using [Yarn](https://yarnpkg.com/). At the moment, npm doesn't correctly install dependencies since it doesn't have Yarn's workspaces functionality.

Since I prefer using shell scripts over `yarn run` commands, I've added a shell script that does basic tasks like compiling, linting and testing. Use `yarn link` to make it available (or you could just run it by pointing to its path directly). The script detects its running directory to ensure it works from anywhere.

If you're copying this example for your own project, you might want to rename the script from `task` to something more specific.

### Issues

Please feel free to make an issue if you have questions, or if you know a way to improve this setup.

* Can't seem to run Jest with a `.babelrc` file, rather than a `babel.config.js` file. It doesn't correctly transform dependencies in that case.

### Todo

* Add command to publish to npm.

### Copyright

Copyright © 2018, Michiel Sikma.

MIT license.
