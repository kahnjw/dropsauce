var fs = require('fs');
var header = fs.readFileSync('src/html/header.html', 'utf8');

module.exports = {
  header: header
};
