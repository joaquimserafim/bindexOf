var test = require('tape');
var search = require('./');


test('find a buffer inside another buffer', function (t) {
  t.plan(1);
  var buffer = new Buffer('Node.js is a platform built on Chrome\'s JavaScript ' +
                   'runtime for easily building fast, scalable network applications.platform');

  var buffer_to_find = new Buffer('easily');

  t.deepEqual(search(buffer, buffer_to_find), 63, 'should find `easily` at position 63 inside the major buffer!');
});
