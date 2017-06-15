//TCP TIME
var net = require("net");
var moment = require("moment");

server = net.createServer(function(socket){
  var date = new Date();
  socket.end(moment(date).format("YYYY-MM-DD HH:mm")+"\n");
});
server.listen(process.argv[2]);