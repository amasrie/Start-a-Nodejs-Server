//serving JSON
var http = require("http");
var url = require("url");

server = http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type': 'application/json' }) 
  if (req.method == 'GET') {
    var queryString = url.parse(req.url,true);
    var time = queryString.query.iso;
    var date = new Date(time);
    if(queryString.pathname == '/api/parsetime'){
      res.end(JSON.stringify({"hour": date.getHours(),"minute": date.getMinutes(),"second": date.getSeconds()}))
    }else if(queryString.pathname == '/api/unixtime'){
      res.end(JSON.stringify({"unixtime": date.getTime()}))
    }else{
      res.writeHead(404); 
      res.end();
    }
  }else{
    res.writeHead(404); 
    res.end();
  }
});
server.listen(process.argv[2]);