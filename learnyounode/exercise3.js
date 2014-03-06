/** 
/* Step by step like a real n00b who I am
**/

// load fs module
var fs = require('fs');

// the second parameter of argv is always the path of the file
var filepath = process.argv[2];

// read a file
var fileread = fs.readFileSync(filepath);

// readFileSync always return a buffer object, so it's necessary to convert to a string
var str = fileread.toString();

// \n is a delimiter of each new line, so I can split my completely string in differents lines
var splitStr = str.split('\n');

// now, I can calculate the number of new lines
var lengthStr = splitStr.length - 1;

console.log(lengthStr);