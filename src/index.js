var fs = require('fs');
var path = require('path');
var headerPath = path.resolve(__dirname, 'html/header.html');
var header = fs.readFileSync(headerPath, 'utf8');

module.exports = {
  header: header
};
