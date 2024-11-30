// function player(nickname){
//     this.nickname = nickname;
//     this.playedMatch = 0;
// }

// player.prototype.play = 
// function(){
// this.playedMatch++;
// console.log(this.nickname, this.playedMatch);
// }

// player.prototype.getTierLevel =
// function(){
//     if(this.playedMatch < 4){
//         return "A";
//     }
//     else if (this.playedMatch > 3 && this.playedMatch < 7) {
//         return "B";
//     } else {
//         return "C";
//     }
// }

// function printTierLevel(player){
  

//    console.log(player.nickname, player.getTierLevel());

// }


//_______________________________________________________________________________________
//12.feladattól
function Person(){
    this.name = "Géza";
}

Person.prototype.GetName =
function(){
    return this.name;
}

Person.prototype.Student= 
function(school){
    this.school = school;
}
//Object.setPrototypeOf(Student.prototype, Person.prototype)



//_______________________________________________________________________________________

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
//     printTierLevel(){
//         console.log(this.nickname, this.getTierLevel());
//     }
// }


//const gomszab = new player("gomszab");
const person = new Person();
console.log(person.GetName());


// gomszab.play();
// gomszab.getTierLevel();
// console.log(gomszab.getTierLevel());
 // printTierLevel(gomszab);
// gomszab.printTierLevel();
