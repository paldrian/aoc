//424 players; last marble is worth 71482 points



var players = [];
var marble = { score :0 };
marble.next = marble;
marble.prev = marble;
var current = marble;

var postition = 1;
for(var i=0; i<424;i++){
    players.push({score:0});
}

for(var i=1; i<=7148200; i++){
    

    if(i%23==0)
    {
        current = current.prev.prev.prev.prev.prev.prev.prev;
        players[i%players.length].score += i;
        players[i%players.length].score += current.score;
        current.prev.next = current.next;
        current.next.prev = current.prev;

        current = current.next;
    }else{

        var current = current.next;
        var newMarble = {score: i, next:current.next, prev: current};
        current.next = newMarble;
        newMarble.next.prev = newMarble;
        current = newMarble;

    }
    
}

var highscore =0;
for(var i=0; i<players.length; i++)
{
    if(players[i].score>highscore)
        highscore = players[i].score;
}
console.log(highscore)