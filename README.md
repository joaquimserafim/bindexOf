# buffer-search

<a href="https://nodei.co/npm/buffer-search/"><img src="https://nodei.co/npm/buffer-search.png?downloads=true"></a>

[![Build Status](https://travis-ci.org/joaquimserafim/buffer-search.png?branch=master)](https://travis-ci.org/joaquimserafim/buffer-search)


####summary
Search a Buffer inside another Buffer, runs pretty well for small buffers or searches that the searchValue is found near the beginning, returns the first occurrence of the specified value, starting the search at fromIndex, returns -1 if the value is not found.

**Case-sensitivity:** The `buffer-search` is case sensitive.

**Benchmark:** run `npm run bench` to see some results.

**V1.2**

####app

	search(buffer, searchBuffer[, fromIndex]])
	
 **fromIndex**
*The location to start the search from. It can be any integer between 0 and the length of the buffer. The default value is 0.*

####example

	var search = require('buffer-search');
	
	
	var buffer = new Buffer('Node.js is a platform built on Chrome\'s JavaScript ' +
                   'runtime for easily building fast, scalable network ' + 
                   'applications.platform');
                
                
    var buffer_to_find = new Buffer('easily');
    
    
    var find = search(buffer, buffer_to_find);
    
    console.log(find); // 63