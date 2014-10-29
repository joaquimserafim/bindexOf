var test = require('tape');
var bindexOf = require('./');


test('searches the index for a buffer in a buffer', function (t) {
  t.plan(2);

  var buffer = new Buffer('Node.js is a platform built on Chrome.');

  t.deepEqual(bindexOf(buffer, new Buffer('on')), 28, 'should find `on` and return position 28.');
  t.deepEqual(bindexOf(buffer, new Buffer('HELLO')), -1, 'shouldn\'t find anything and return -1.')
});
