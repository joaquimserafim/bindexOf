// Returns the maximum length of the substring ends at p and is a suffix
function suffixLength (needle, p) {
  var len = 0;
  for (var i = p,
       j = needle.length - 1;
       i >= 0 && needle[i] == needle[j];
       --i,
       --j) { len += 1; }
  return len;
}

// Is needle[p:end] a prefix of needle?
function isPrefix (needle, p) {
  for (var i = p, j = 0; i < needle.length; ++i, ++j) {
    if (needle[i] != needle[j]) return false;
  }
  return true;
}

// Makes the jump table based on the mismatched character information
function makeCharTable (needle) {
  var ALPHABET_SIZE = 256;
  var table = new Uint32Array(ALPHABET_SIZE);
  var i;

  for(i = 0; i < table.length; ++i)
    table[i] = needle.length;

  for(i = 0; i < needle.length; ++i)
    table[needle[i]] = needle.length - 1 - i;

  return table;
}

// Makes the jump table based on the scan offset which mismatch occurs
function makeOffsetTable (needle) {
  var table = new Uint32Array(needle.length);
  var lastPrefixPosition = needle.length;
  var i;

  for (i = needle.length - 1; i >= 0; --i) {
    if (isPrefix(needle, i + 1))
      lastPrefixPosition = i + 1;

    table[needle.length - 1 - i] = lastPrefixPosition - i + needle.length - 1;
  }

  for (i = 0; i < needle.length - 1; ++i) {
    var slen = suffixLength(needle, i);
    table[slen] = needle.length - 1 - i + slen;
  }

  return table;
}


//Returns the index within this string of the first occurrence of the
//specified substring. If it is not a substring, return -1.
//@param haystack The string to be scanned
//@param needle The target string to search
//@return The start index of the substring
function indexOf (haystack, needle) {
  if (!needle) return 0;

  var charTable = makeCharTable(needle);
  var offsetTable = makeOffsetTable(needle);

   for (var i = needle.length - 1, j; i < haystack.length;) {
    for (j = needle.length - 1; needle[j] == haystack[i]; --i, --j) {
      if (!j) return i;
    }

    i += Math.max(offsetTable[needle.length - 1 - j], charTable[haystack[i]]);
  }

  return -1;
}

module.exports = indexOf;
