@vicsanjinez/sanji


[![NpmVersion](https://img.shields.io/npm/v/@vicsanjinez/sanji.svg)](https://github.com/vicsanjinez/sanji.git)


[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@vicsanjinez/sanji.svg)](https://github.com/vicsanjinez/sanji)


![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)



## Description

Removes all spaces from a string.

## Install

```
$ npm install @vicsanjinez/sanji
```

## Usage

```js
const tiny = require("@vicsanjinez/sanji");

sanji("So much space!");
//=> "Somuchspace!"

sanji(1337);
//=> Uncaught TypeError: sanji wants a string!
//    at sanji (<anonymous>:2:41)
//    at <anonymous>:1:1
```