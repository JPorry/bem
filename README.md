# BEM

[![Travis build status](http://img.shields.io/travis/JPorry/bem.svg?style=flat)](https://travis-ci.org/JPorry/bem)
[![npm version](https://img.shields.io/npm/v/@please/bem.svg)](https://www.npmjs.com/package/@please/bem)
[![Test Coverage](https://coveralls.io/repos/github/JPorry/bem/badge.svg?branch=master)](https://coveralls.io/github/JPorry/bem?branch=master)
[![gzip size](http://img.badgesize.io/https://unpkg.com/@please/bem/dist/bem.min.js?compression=gzip)](https://unpkg.com/@please/bem/dist/bem.min.js)

A lightweight utility to generate bem-like classnames


### Installation

Install using [npm](https://www.npmjs.com):

```
npm install @please/bem
```

or [yarn](https://yarnpkg.com/):

```
yarn add @please/bem
```

### Usage

```js
import bem from '@please/bem';

const menu = bem('menu', {'-active': true, '-disabled': false});
console.log(menu.className); // menu menu-active

const menuItem = menu('item', {'-highlighted': true, '-disabled': false}
console.log(menuItem.className); // menu_item menu_item-highlighted
```

### API

This library exports just one method:

#### `bem(blockName, classObject)` 

* *blockName* is a string with the name of the block.
* *classObject* is an object where the keys are modifiers that will get added to the generated class name if the associated value is not falsy. If the key name starts with a `-` the blockName will be appended to the key name.

This function returns another function with similar signature and a *className* property. Access this *className* property to get the generated class name.
Use the returned function to provide en element name and another classObject and compose your selectors.


#### `bem.withPrefix(prefix)`

* *prefix* is a string that contains the prefix that you want to use.

This function returns a prefixed version of *bem* that is always going to append the prefix to every Block or Element that you pass to the function.

Example of usage:

```js
import bem from '@please/bem';

const myBem = bem.withPrefix('bem');

const menu = myBem('menu', {'-active': true, '-disabled': false});
console.log(menu.className); // bem-menu bem-menu-active

const menuItem = menu('item', {'-highlighted': true, '-disabled': false}
console.log(menuItem.className); // bem-menu_item bem-menu_item-highlighted
```
