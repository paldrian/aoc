
var fs = require('fs');
 
var input = fs.readFileSync('5.txt', 'utf8');

var best = input.length;



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



for(var i=65; i<97; i++)
{
    var candidate = input.replace(new RegExp(String.fromCharCode(i),"g"),'')
    candidate = candidate.replace(new RegExp(String.fromCharCode(i+32),"g"),'')

    console.log(String.fromCharCode(i,i+32))

    while(candidate.length > reduce(candidate).length){
        candidate = reduce(candidate);
    }

    if(candidate.length<best)
    {
        best = candidate.length;
    }

    console.log(String.fromCharCode(i)+":"+candidate.length+" "+best)
}



console.log(best);


