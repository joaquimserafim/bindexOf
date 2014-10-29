'use strict'

module.exports = bindexOf;

function bindexOf(buffer, searchValue, fromIndex) {
  fromIndex = fromIndex || 0;

  for (var i = fromIndex, j = 0; i < buffer.length; i++) {
    // not equal continue
    if (buffer[i] ^ searchValue[j]) {
      j = 0;
      continue;
    }
    // equal, increment j and verify j has the same value as searchValue.length
    j++;
    if (searchValue.length === j)
      return searchValue.length === 1 ? i : (i - j + 1);
  }
  return -1;
}
