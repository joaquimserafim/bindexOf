var assert = require('assert');
var bench = require('bench');
var search = require('./');

var smallString = 'Hello world';
var smallBuffer = new Buffer(smallString);
var toFind = 'wor';
var toFindBuffer = new Buffer(toFind);

var bigString = 'Node.js is a platform built on Chrome\'s JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.';
var bigBuffer = new Buffer(bigString);
var toFindInBig = 'an';
var toFindInBigBuffer = new Buffer(toFindInBig);


function useSearch (buffer, find, pos) {
  var res = search(buffer, find);
  assert.equal(res, pos);
  return res;
}

function stringSearch (string, find, pos) {
  var res = string.indexOf(find);
  assert.equal(res, pos);
  return res;
}

function convertBufferToString (buffer, find) {
  var res = buffer.toString().indexOf(find.toString());
  assert.equal(res, 6);
  return res;
}


exports.compare = {
  'search inside a small buffer': function () {
    useSearch(smallBuffer, toFindBuffer, 6);
  },
  'search inside a small string': function () {
    stringSearch(smallString, toFind, 6);
  },
  'buffer to string and make the search': function () {
    convertBufferToString(smallBuffer, toFindBuffer);
  },
  'search inside a big buffer': function () {
    useSearch(bigBuffer, toFindInBigBuffer, 129);
  },
  'search inside a big string': function () {
    stringSearch(bigString, toFindInBig, 129);
  }
};

bench.runMain();
