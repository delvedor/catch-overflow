'use strict'

const open = require('opener')

function catchOverflow (func, args) {
  try {
    func.apply(null, args)
  } catch (e) {
    open('https://stackoverflow.com/search?q=' + encodeURIComponent(e))
  }
}

module.exports = catchOverflow
