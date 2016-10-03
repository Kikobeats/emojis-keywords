'use strict'

var emojiList = require('emojis-list')
var emojiOne = require('emojione')
var log = require('acho')()
var fs = require('fs')

function stringify (val) {
  return JSON.stringify(val, null, 2)
}

var CONST = {
  MAIN_FILE: 'index.js'
}

var emojis = emojiList.map(function (emoji) {
  var emojiShortname = emojiOne.toShort(emoji)
  log.debug('detected', {emoji: emoji, shortname: emojiShortname})
  return emojiShortname
})

log.info('total:', emojis.length)
fs.writeFileSync(CONST.MAIN_FILE, 'module.exports = ' + stringify(emojis), 'utf8')
log.info('saved at', CONST.MAIN_FILE)
