//read new lines in a text file
var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function(err, result){
  if(err){
    console.log(err);
  }else{
    var str = result.split("\n");
    console.log(str.length-1);    
  }
})