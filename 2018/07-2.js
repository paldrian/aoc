

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

/*inputs = [
    ['C', 'A'],
    ['C', 'F'],
    ['A', 'B'],
    ['A', 'D'],
    ['B', 'E'],
    ['D', 'E'],
    ['F', 'E']
]*/


var output = '';
var workoutput = '';
var workers = [{ time: -1 }, { time: -1 },{time:-1},{time:-1},{time:-1}]
time = -1;

var wokersWork = function(){

    workers.forEach(function (worker) {
        if(worker.time>0)
        {
            return true;
        }
    });

    return false;
}

while (inputs.length > 0 || wokersWork()) {
    var childs = []
    var parents = [];

    time++;

    workers.forEach(function (worker) {

        if (worker.time > 0) {
            worker.time--;
        }

        if (worker.time === 0) {
            output += worker.work
            worker.time = -1;

            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i][0] === worker.work) {

                    if(inputs.length === 1 && inputs[0][1]!='.'){
                        inputs.push([inputs[0][1],'.'])
                    }

                    inputs.splice(i, 1);
                    i--;
                }
            };
        }

    });


    for (var i = 0; i < inputs.length; i++) {



        if (childs.indexOf(inputs[i][0]) === -1) {
            childs.push(inputs[i][0]);
        }
        if (parents.indexOf(inputs[i][1]) === -1) {
            parents.push(inputs[i][1]);
        }

        parents.forEach(function (parent) {
            if (childs.indexOf(parent) != -1) {
                childs.splice(childs.indexOf(parent), 1);
            }
        })

    }

    childs.sort(function (a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });

    

    for (var i = 0; i < childs.length; i++) {
        if (workoutput.indexOf(childs[i]) != -1) {
            childs.splice(i, 1);
            i--;

        }

    }



    workers.forEach(function (worker) {



        if (worker.time === -1 && childs.length > 0) {

            worker.time = childs[0].charCodeAt(0) - 4;
            worker.work = childs[0];
            childs.splice(0, 1);
            workoutput += worker.work;


        }


    });

    console.log(time + ":" + output);


}

