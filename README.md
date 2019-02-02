# create-nm

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Coverage Status][codecov-image]][codecov-url]

`npm init nm` to create a **n**pm **m**odule.

> Never manually do the linting, versioning, tagging, editing changelog and pushing commit, unleash the power of hooks.

## Create a npm module

- use `npm init`

```bash
$ npm init nm [name]
```

- use `npx`

```bash
$ npx create-nm [name]
```

- use `create-nm` cli

```bash
$ npm i -g create-nm
$ create-nm [name]
# or
$ nm [name]
```

## Workflow of publishing a npm module

Commit and publish, everything will be done automatically.

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
                          |   update npm version
                          |   update CHANGELOG.md
                          |   commit version with changelog
                          +-> add git tag
                              git push commit
                              npm publish
```

## Optional workflow

Use `git cz` instead of `git commit`, this will generate better changelog.
You need to install `commitizen` and create `~/.czrc`.

```bash
$ npm install commitizen -g
$ echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```

Workflow:

```bash
$ git cz
$ npm publish
```

## Related

- [np](https://github.com/sindresorhus/np) A better `npm publish`.
- [commitizen](https://github.com/commitizen/cz-cli) Simple commit conventions for internet citizens.
- [conventional-changelog](https://www.npmjs.com/package/conventional-changelog-cli) Generate a changelog from git metadata.
- [lint-staged](https://github.com/okonet/lint-staged) Lint files staged by git.
- [husky](https://github.com/typicode/husky) Prevents bad commit or push (git hooks, pre-commit/precommit, pre-push/prepush, post-merge/postmerge and all that stuff...)].

## License

[MIT](http://opensource.org/licenses/MIT)

[npm-image]: https://img.shields.io/npm/v/create-nm.svg?style=flat-square
[npm-url]: https://npmjs.org/package/create-nm
[travis-image]: https://img.shields.io/travis/MarmotHQ/create-nm.svg?style=flat-square
[travis-url]: https://travis-ci.org/MarmotHQ/create-nm
[codecov-image]: https://img.shields.io/codecov/c/github/MarmotHQ/create-nm.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/MarmotHQ/create-nm
[daviddm-image]: https://david-dm.org/MarmotHQ/create-nm.svg?style=flat-square
[daviddm-url]: https://david-dm.org/MarmotHQ/create-nm
