'use strict'

const open = require('opener')

function catchOverflow (func, args, context) {
  try {
    return func.apply(context, args)
  } catch (e) {
    if (process.env.NODE_ENV === 'development') {
      open('https://stackoverflow.com/search?q=' + encodeURIComponent(e))
    }
    return e
  }
}

module.exports = catchOverflow
