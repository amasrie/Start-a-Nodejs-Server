//collect data from HTTP
var http = require('http');
var str;
http.get(process.argv[2], function(response){
  var filter = [];
  response.setEncoding("utf8");
  response.on('error', console.error);
  response.on("data", function(res){
    filter.push(res.toString());
  });
              
  response.on("end", function(){
    var str = filter.join("");
    console.log(str.length);
    console.log(str);
  })
}).on('error', console.error) 

/*
Official solution

    var http = require('http')                                                                   
    var bl = require('bl')                                                                       
                                                                                                 
    http.get(process.argv[2], function (response) {                                              
      response.pipe(bl(function (err, data) {                                                    
        if (err) {                                                                               
          return console.error(err)                                                              
        }                                                                                        
        data = data.toString()                                                                   
        console.log(data.length)                                                                 
        console.log(data)                                                                        
      }))                                                                                        
    })  
*/