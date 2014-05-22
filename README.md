# buffer-search

<a href="https://nodei.co/npm/buffer-search/"><img src="https://nodei.co/npm/buffer-search.png?downloads=true"></a>

[![Build Status](https://travis-ci.org/joaquimserafim/buffer-search.png?branch=master)](https://travis-ci.org/joaquimserafim/buffer-search)


Search a Buffer inside another Buffer using the [Boyer-Moore](http://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string_search_algorithm) algorithm search



**V1**


####Example

	var search = require('buffer-search');
	
	
	var buffer = new Buffer('Node.js is a platform built on Chrome\'s JavaScript ' +
                   'runtime for easily building fast, scalable network ' + 
                   'applications.platform');
                
                
    var buffer_to_find = new Buffer('easily');
    
    
    var find = search(buffer, buffer_to_find);
    
    console.log(find); // 63