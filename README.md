# emojis-keywords

[![Dependency status](http://img.shields.io/david/Kikobeats/emojis-keywords.svg?style=flat-square)](https://david-dm.org/Kikobeats/emojis-keywords)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/emojis-keywords.svg?style=flat-square)](https://david-dm.org/Kikobeats/emojis-keywords#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/emojis-keywords.svg?style=flat-square)](https://www.npmjs.org/package/emojis-keywords)
[![Gittip](http://img.shields.io/gittip/Kikobeats.svg?style=flat-square)](https://www.gittip.com/Kikobeats/)

> Complete list of am emoji shortcuts. Based on [emoji-cheat-sheet.com](http://www.emoji-cheat-sheet.com).

The file content all shortcuts declared that you can use for invoke a emoji.

## Install

```bash
npm install emojis-keywords --save
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
bower install emojis-keywords --save
```

and later link in your HTML:

```html
<script src="bower_components/emojis-keywords/dist/emojis-keywords.js"></script>
```

## Usage

```
var emojis = require('emojis-keywords');
console.log(emojis[0]);
// => +1
```

## Related

* [is-emoji-keyword](https://github.com/Kikobeats/is-emoji-keyword) – Check if a word is a emoji shortcut.
* [trim-emoji](https://github.com/Kikobeats/trim-emoji) – Deletes ':' from the begin and the end of an emoji shortcut.

## License

MIT © [Kiko Beats](http://www.kikobeats.com)
