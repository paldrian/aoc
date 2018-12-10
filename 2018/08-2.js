
var fs = require('fs');

inputs = fs.readFileSync('8.txt', 'utf8');
//inputs = '2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2';
inputs = inputs.split(' ');


function solve(childs, meta) {

    if (childs === 0) {
        var ouput = 0;
        for (var i = 0; i < meta; i++) {
            ouput += parseInt(inputs.shift());
        }
        return ouput;
    }

    var childss = {};
    for (var i = 0; i < childs; i++) {
        childss[i]=solve(parseInt(inputs.shift()), parseInt(inputs.shift()));
    }

    var count = 0;
    for (var i = 0; i < meta; i++) {
        var index = parseInt(inputs.shift())-1;
        if(childss[index])
        {
            count += childss[index];
        }
    }

    return count;



    

}





console.log(solve(parseInt(inputs.shift()), parseInt(inputs.shift())));
