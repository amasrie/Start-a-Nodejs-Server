var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, cb){  
  var filtered = [];
  fs.readdir(dir, function(err, list){
    if(err){
      return cb(err);
    }
    for(var i = 0; i < list.length; i++){
      if(path.extname(list[i]) == "."+ext){
        filtered.push(list[i]);
      }
    }
    cb(null, filtered);
  });
}