var fs = require('fs'),
  path = require('path');

module.exports = function(folderPath, ext, callback){

  fs.readdir(folderPath, function( err, list ){
    if (err) return callback(err);

    list = list.filter(function ( file ) {
      return path.extname(file) === '.' + ext
    });

    return callback(null, list);
  });

}