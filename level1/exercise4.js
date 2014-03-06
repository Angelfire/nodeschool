var fs = require('fs');

var filepath = process.argv[2];

 // fs.readFile(file, 'utf8', callback) can also be used
fs.readFile(filepath, function(err, data){
  if (err){
    throw err;
  } else {
    var linesLength = data.toString().split('\n').length - 1;
    console.log(linesLength);
  }
});
