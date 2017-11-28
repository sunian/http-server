'use strict';

var fs = require('fs');

module.exports = function (req, res, next) {
  if (req.url.endsWith('.metadata')) {
    console.log('intercept!', req.url);
    res.redirect('/gerudo.png');
    return;
  }
  next();
};