
var fs = require('fs');
 
var input = [
[165, 169],
[334, 217],
[330, 227],
[317, 72],
[304, 232],
[115, 225],
[323, 344],
[161, 204],
[316, 259],
[63, 250],
[280, 205],
[84, 282],
[271, 158],
[190, 296],
[106, 349],
[171, 178],
[203, 108],
[89, 271],
[193, 254],
[111, 210],
[341, 343],
[349, 311],
[143, 172],
[170, 307],
[128, 157],
[183, 315],
[211, 297],
[74, 281],
[119, 164],
[266, 345],
[184, 62],
[96, 142],
[134, 61],
[117, 52],
[318, 72],
[338, 287],
[61, 215],
[323, 255],
[93, 171],
[325, 249],
[183, 171],
[71, 235],
[329, 306],
[322, 219],
[151, 298],
[180, 255],
[336, 291],
[72, 300],
[223, 286],
[179, 257]
]



results = {}
matrix = [];

for(var i=0; i<400; i++){
    
    for(var j=0; j<400; j++)
    {
        var distance = 0;
        for(var index=0; index<input.length; index++)
        {
            length = Math.abs(i-input[index][0])+Math.abs(j-input[index][1]);
            distance += length;
        };
        if(distance<10000){
            if(!results[bestCoord])
            {
                results[bestCoord] = {
                    border: false,
                    size: 1};
            }    
            else
            {
               results[bestCoord].size++
            }

            if(i===0 || j===0 || j===399 || i===399)
            {
                results[bestCoord].border = true;
            }


        }
    }
}

console.dir(results)
var bestsize = 0;

for(var index=0; index<input.length; index++)
{
    if(!results[index].border)
    {
        console.log(results[index].size+':'+results[index].border)
        if(results[index].size>bestsize)
        {
            bestsize = results[index].size;
        }
    }    
};

console.log(bestsize);
