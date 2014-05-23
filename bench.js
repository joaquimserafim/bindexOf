var bench = require('bench');
var search = require('./');

var smallString = 'Hello World';
var smallBuffer = new Buffer(smallString);
var toFind = 'or';
var toFindBuffer = new Buffer(toFind);

function bSearch (buffer, find) {
  return search(buffer, find);
}

function sSearch (string, find) {
  return string.indexOf(find);
}

function convertBufferToString (buffer, find) {
  return buffer.toString().indexOf(find.toString());
}


exports.compare = {
  'search inside a small buffer': function () {
    bSearch(smallBuffer, toFindBuffer);
  },
  'search inside a small string': function () {
    sSearch(smallString, toFind);
  },
  'convert from buffer to string and make the search': function () {
    convertBufferToString(smallBuffer, toFindBuffer);
  }
};

bench.runMain();
