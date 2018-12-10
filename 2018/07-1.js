
 
var inputs = [

    ['G', 'W'],
    ['X', 'S'],
    ['F', 'V'],
    ['C', 'Y'],
    ['M', 'J'],
    ['K', 'Z'],
    ['U', 'W'],
    ['I', 'H'],
    ['W', 'B'],
    ['A', 'Y'],
    ['Y', 'D'],
    ['S', 'Q'],
    ['N', 'V'],
    ['H', 'D'],
    ['D', 'Q'],
    ['L', 'E'],
    ['Q', 'E'],
    ['T', 'R'],
    ['J', 'P'],
    ['R', 'E'],
    ['E', 'V'],
    ['O', 'P'],
    ['P', 'B'],
    ['Z', 'V'],
    ['B', 'V'],
    ['Y', 'B'],
    ['C', 'B'],
    ['Q', 'T'],
    ['W', 'P'],
    ['X', 'Z'],
    ['L', 'T'],
    ['G', 'Y'],
    ['Y', 'R'],
    ['E', 'B'],
    ['X', 'E'],
    ['Y', 'V'],
    ['H', 'L'],
    ['L', 'J'],
    ['S', 'T'],
    ['F', 'T'],
    ['Y', 'J'],
    ['A', 'H'],
    ['P', 'Z'],
    ['R', 'O'],
    ['X', 'F'],
    ['I', 'O'],
    ['Y', 'Q'],
    ['S', 'D'],
    ['Q', 'B'],
    ['C', 'D'],
    ['Y', 'N'],
    ['O', 'Z'],
    ['G', 'D'],
    ['A', 'O'],
    ['U', 'N'],
    ['Y', 'P'],
    ['E', 'O'],
    ['I', 'Q'],
    ['W', 'O'],
    ['D', 'B'],
    ['Z', 'B'],
    ['L', 'B'],
    ['P', 'V'],
    ['C', 'E'],
    ['S', 'O'],
    ['U', 'T'],
    ['U', 'O'],
    ['Y', 'L'],
    ['N', 'L'],
    ['Q', 'Z'],
    ['U', 'L'],
    ['U', 'D'],
    ['J', 'O'],
    ['L', 'R'],
    ['S', 'P'],
    ['H', 'R'],
    ['F', 'I'],
    ['D', 'T'],
    ['C', 'M'],
    ['W', 'D'],
    ['R', 'V'],
    ['U', 'S'],
    ['K', 'R'],
    ['D', 'V'],
    ['D', 'R'],
    ['I', 'E'],
    ['L', 'O'],
    ['T', 'Z'],
    ['A', 'E'],
    ['D', 'Z'],
    ['H', 'V'],
    ['A', 'L'],
    ['W', 'R'],
    ['F', 'A'],
    ['Y', 'Z'],
    ['I', 'P'],
    ['F', 'J'],
    ['H', 'B'],
    ['G', 'Z'],
    ['C', 'K'],
    ['D', 'E']
]


var output = '';


while(inputs.length>0){
var childs = []
var parents = [];


for(var i=0; i<inputs.length; i++){



    if(childs.indexOf(inputs[i][0])===-1)
    {
        childs.push(inputs[i][0]);
    }
    if(parents.indexOf(inputs[i][1])===-1)
    {
        parents.push(inputs[i][1]);
    }

    parents.forEach(function(parent){
        if(childs.indexOf(parent)!=-1)
        {
            childs.splice(childs.indexOf(parent),1);
        }
    })

}

childs.sort(function(a,b){
    if(a>b) return 1;
    if(a<b) return -1;
    return 0;
});


output += childs[0];
console.log(output);

var search = output.substring(output.length-1,output.length);

for(var i=0; i<inputs.length; i++){
    if(inputs[i][0]===search)
    {
        inputs.splice(i,1);
        i--;
    }

};


}

console.log(output+parents[0])