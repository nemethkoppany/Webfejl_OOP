//Órai anayg

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
//12.feladattól 17. feladatig
function Person(name, student){
    this.name = "Géza";
    this.student = student;
}

function GetName(name, student){
    Person.call(this, name, student);
    
}

//16.feladatnál kell használni(valahogy)
//Object.setPrototypeOf(Student.prototype, Person.prototype)


console.log(new GetName(this.name).name, new GetName(this.name, "Student").student)

//_______________________________________________________________________________________
//Órai anyag


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



// gomszab.play();
// gomszab.getTierLevel();
// console.log(gomszab.getTierLevel());
 // printTierLevel(gomszab);
// gomszab.printTierLevel();
