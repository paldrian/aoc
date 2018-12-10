
var fs = require('fs');
 
inputs = fs.readFileSync('8.txt', 'utf8');
//inputs = '2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2';
inputs = inputs.split(' ');

var ouput = 0;

function solve(childs, meta){


    for(var i=0; i< childs; i++){
        solve(parseInt(inputs.shift()),parseInt(inputs.shift()));
    }
    
    for(var i=0; i<meta; i++)
    {
        ouput += parseInt(inputs.shift());
    }
    
    console.log(ouput);
    
}





solve(parseInt(inputs.shift()),parseInt(inputs.shift()));
