function player(nickname){
    this.nickname = nickname;
    this.playedMatch = 0;
}

player.prototype.play = 
function(){
this.playedMatch++;
console.log(this.nickname, this.playedMatch);
}

player.prototype.getTierLevel =
function(){
    if(this.playedMatch < 4){
        return "A";
    }
    else if (this.playedMatch > 3 && this.playedMatch < 7) {
        return "B";
    } else {
        return "C";
    }
}

function printTierLevel(player){
  

   console.log(player.nickname, player.getTierLevel());

}


// class player{
//     constructor(nickname){
//         this.nickname = nickname;
//         this.playedMatch = 0;
//     }

//     play(){
//          this.playedMatch++;
//         console.log(this.nickname, this.playedMatch);
//     }

//     getTierLevel(){
//         if(this.playedMatch < 4){
//                     return "A";
//                 }
//                 else if (this.playedMatch > 3 && this.playedMatch < 7) {
//                     return "B";
//                 } else {
//                     return "C";
//                 }
//     }
// }


const gomszab = new player("gomszab");

gomszab.play();
gomszab.getTierLevel();
console.log(gomszab.getTierLevel());
printTierLevel(gomszab);