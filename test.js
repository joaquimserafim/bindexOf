var test = require('tape');
var search = require('./');


test('searches for a buffer', function (t) {
  t.plan(2);

  var buffer = new Buffer('Node.js is a platform built on Chrome.');

  t.deepEqual(search(buffer, new Buffer('on')), 28, 'should find `on` and return position 28.');
  t.deepEqual(search(buffer, new Buffer('HELLO')), -1, 'shouldn\'t find anything and return -1.')
});
