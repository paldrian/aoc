
var input = {};
var serial = 2568;

for (var x = 1; x <= 300; x++) {
    input[x] = {};
    for (var y = 1; y <= 300; y++) {
        var rackId = (x + 10);
        var powerlevel = rackId * y;
        powerlevel += serial;
        powerlevel *= rackId;
        powerlevel = (Math.floor(powerlevel / 100) % 10) - 5;
        input[x][y] = powerlevel;
    }
}

var max = -100;
var output = ''

for (var x = 1; x <= 300; x++) {
    console.log(x+' '+output);
    for (var y = 1; y <= 300; y++) {

        for (var size = 1; size < 299 - Math.max(x, y); size++) {
            sum = 0;

            for (var xx = x; xx < x + size; xx++)
                for (var yy = y; yy < y + size; yy++)
                    sum += input[xx][yy];

            if (sum > max) {
                output = x + ',' + y+','+size;
                max = sum;

            }

        }




    }
}

console.log(output);


