//request to upper caes response
var http = require("http");
var map = require('through2-map');

server = http.createServer(function(req, res){
  if (req.method !== 'POST') {                                                               
    return res.end('send me a POST\n')                                                       
  } 
  req.pipe(map(function (chunk) {
     return chunk.toString().toUpperCase();
   })).pipe(res);
});
server.listen(process.argv[2]);