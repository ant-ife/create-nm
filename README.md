# create-nm

run `npm init nm` to create a npm module

> Never manually do the versioning, tagging and editing changelog, unleash the power of hooks.

## Create a npm module

```bash
$ npm init nm [path]
```

## Automatic workflow of publishing a npm module

```bash
$ git commit
$ git commit
    ...
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
