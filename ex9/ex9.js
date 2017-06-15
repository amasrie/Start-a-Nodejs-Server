//collect data from 3 HTTP URLS
var http = require('http');
var list = [];
var buff = [];

function getURL(num){
  http.get(process.argv[num], function(response){
    response.setEncoding("utf8");
    response.on("data", function(res){
      buff.push(res.toString());
    });
    response.on("end", function(){
      list.push(buff.join(""));
      buff = [];
      if(num < 4){ getURL(num+1); }
      else{
        for(var i = 0; i < 3; i++){
          console.log(list[i]);
        }
      }
      
    })
  }).on('error', console.error)   
}

getURL(2);

/*
  Official solution

   var http = require('http')                                                                   
    var bl = require('bl')                                                                       
    var results = []                                                                             
    var count = 0                                                                                
                                                                                                 
    function printResults () {                                                                   
      for (var i = 0; i < 3; i++) {                                                              
        console.log(results[i])                                                                  
      }                                                                                          
    }                                                                                            
                                                                                                 
    function httpGet (index) {                                                                   
      http.get(process.argv[2 + index], function (response) {                                    
        response.pipe(bl(function (err, data) {                                                  
          if (err) {                                                                             
            return console.error(err)                                                            
          }                                                                                      
                                                                                                 
          results[index] = data.toString()                                                       
          count++                                                                                
                                                                                                 
          if (count === 3) {                                                                     
            printResults()                                                                       
          }                                                                                      
        }))                                                                                      
      })                                                                                         
    }                                                                                            
                                                                                                 
    for (var i = 0; i < 3; i++) {                                                                
      httpGet(i)                                                                                 
    }                
*/