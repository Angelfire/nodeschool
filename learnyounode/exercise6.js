var mymodule = require('./exercise6-module');

var filePath = process.argv[2];
var ext = process.argv[3];

mymodule(filePath, ext, function(err, data){
  if (err) return console.error(err);

  data.forEach(function( item ){
    console.log(item);
  });
});