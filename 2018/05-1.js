
var fs = require('fs');
 
var input = fs.readFileSync('5.txt', 'utf8');

function reduce(string){

    for(var i=0; i<string.length-1; i++)
    {
        var start = string.charCodeAt(i);
        var next = string.charCodeAt(i+1);

        if(Math.abs(start-next) == 32)
        {
            return string.replace(string.substring(i,i+2),'');
        }

    }
 return string;
};

while(input.length > reduce(input).length){
    input = reduce(input);
}

console.log(input);
console.log(input.length);

