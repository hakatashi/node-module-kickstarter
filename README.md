# the-module-name-to-fill-in

[![npm version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][david-image]][david-url]
[![devDependency Status][david-dev-image]][david-dev-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]

[npm-image]: https://img.shields.io/npm/v/the-module-name-to-fill-in.svg
[npm-url]: https://www.npmjs.com/package/the-module-name-to-fill-in
[travis-image]: https://travis-ci.org/hakatashi/the-module-name-to-fill-in.svg?branch=master
[travis-url]: https://travis-ci.org/hakatashi/the-module-name-to-fill-in
[david-image]: https://david-dm.org/hakatashi/the-module-name-to-fill-in.svg
[david-url]: https://david-dm.org/hakatashi/the-module-name-to-fill-in
[david-dev-image]: https://david-dm.org/hakatashi/the-module-name-to-fill-in/dev-status.svg
[david-dev-url]: https://david-dm.org/hakatashi/the-module-name-to-fill-in#info=devDependencies
[greenkeeper-image]: https://badges.greenkeeper.io/hakatashi/the-module-name-to-fill-in.svg
[greenkeeper-url]: https://greenkeeper.io/

This is an almighty kickstarter (or template) to develop into node.js module, specially made for me.

Features:

* Static type checking by Flow
* Runtime type checking by tcomb
* Above two checks in one code. By babel-plugin-tcomb
* ESLint
* Babel
* Mocha
* Dynamic testing of README by readme-assert
* Browser-side test and Server-side test in one code. By mochify
* Editorconfig

To start:

	git clone https://github.com/hakatashi/node-module-kickstarter.git my-module
	cd my-module
	rm -rf .git
	git init
	git add .
	git commit -m "Fork from hakatashi/node-module-kickstarter"
	git ls-files | xargs sed -i -e "s/the-module-name-to-fill-in/my-module/g"
	git ls-files | xargs sed -i -e "s/theModuleNameToFillIn/myModule/g"
	git commit -am "Fit into my module"

Supported: Node.js 4+

```js
const theModuleNameToFillIn = require('the-module-name-to-fill-in');

theModuleNameToFillIn(4); //=> 2
theModuleNameToFillIn(3); //=> 10
```
