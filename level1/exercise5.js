var fs = require('fs'),
    path = require('path');

var filepath = process.argv[2],
    ext = process.argv[3];

fs.readdir(filepath, function( err, list ){
  list.forEach( function( item ){
    if (path.extname(item) === '.' + ext){
      console.log(item);
    }
  });
});