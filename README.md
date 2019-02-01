# create-nm

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/create-nm.svg?style=flat-square
[npm-url]: https://npmjs.org/package/create-nm
[travis-image]: https://img.shields.io/travis/MarmotHQ/create-nm.svg?style=flat-square
[travis-url]: https://travis-ci.org/MarmotHQ/create-nm
[codecov-image]: https://img.shields.io/codecov/c/github/MarmotHQ/create-nm.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/MarmotHQ/create-nm
[node-image]: https://img.shields.io/badge/node.js-%3E=_8-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/create-nm.svg?style=flat-square
[download-url]: https://npmjs.org/package/create-nm

`npm init nm` to create a npm module.

> Never manually do the linting, versioning, tagging, editing changelog and pushing commit, unleash the power of hooks.

## Create a npm module

```bash
$ npm init nm [path]
```

## Workflow of publishing a npm module

commit and publish

```bash
$ git commit
$ npm publish
```

```
                       +-------------------+
version :  1.1.0       |                   |
    tag : v1.1.0       |   $ git commit    |
                       |                   |
                       +--+----------------+
                          |
                          +-> lint-staged

                       +-------------------+
                       |                   |
                       |   $ git commit    |
                       |                   |
                       +--+----------------+
                          |
                          +-> lint-staged

                                 +
                                 |
                                 |
                                 |
                                 v

                       +-------------------+
                       |                   |
version :  1.1.1       |  $ npm publish    |
    tag : v1.1.1       |                   |
                       +--+----------------+
                          |
                          |   update CHANGELOG.md
                          |   update npm version
                          +-> add git tag
                              npm publish
                              git push
```

## License

[MIT](http://opensource.org/licenses/MIT)
