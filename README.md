# create-nm

run `npm init nm` to create a npm module

> Never manually do the linting, versioning, tagging or editing changelog, unleash the power of hooks.

## Create a npm module

```bash
$ npm init nm [path]
```

## Automatic workflow of publishing a npm module

All you need to remember is these two simple commands.

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
