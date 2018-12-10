//424 players; last marble is worth 71482 points



var players = [];
var game = [0,2,1];
var postition = 1;
for(var i=0; i<424;i++){
    players.push({score:0});
}

for(var i=3; i<=71482; i++){
    if(i%23===0){


        players[i%players.length].score += i;
        postition = postition-7;


        if(postition<0)
            postition += game.length;


        players[i%players.length].score += game[postition];
        game.splice(postition,1);

        


    }else{

        postition +=2;
        if(postition>game.length)
            postition = postition%(game.length);
        game.splice(postition,0,i);

        //console.log(game.join(' '));
    }

}

var highscore =0;
for(var i=0; i<players.length; i++)
{
    if(players[i].score>highscore)
        highscore = players[i].score;
}
console.log(highscore)