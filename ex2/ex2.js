// process.argv returns an array inputs, starting at index 2
var sum = 0;
 for(var i = 2 ; i < process.argv.length; i++){
   sum += Number(process.argv[i]);
 }
console.log(sum);
