# Shared TSLint Configuration: `@jib/tslint`

Rule configutations for `tslint` used with `@jib` projects, and its tooling.
These rules are _somewhat_ opinionated, but generally loosen those of those in
`tslint:recommended` base.

[![npm version](https://badge.fury.io/js/%40jib%2Ftslint.svg)](https://badge.fury.io/js/%40jib%2Ftslint)
[![wercker status](https://app.wercker.com/status/7b52501145d05e5d9edeac7115ecb261/s/master "wercker status")](https://app.wercker.com/project/byKey/7b52501145d05e5d9edeac7115ecb261)
[![GitHub license](https://img.shields.io/github/license/jibcli/tslint.svg)](https://github.com/jibcli/tslint/blob/master/LICENSE)

## Usage

```shell
npm install --save-dev @jib/tslint
```

> Configure `tslint.json`

```javascript
{
  "extends": ["@jib/tslint"],
  "rules": {
    /* overrides & customizations... */
  }
}
```