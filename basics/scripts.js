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
//12.feladattól(néhány helyen átalakítva) 
// function Person(name){
//     this.name = name;
   
// }



// function Student(name, school){
//     Person.call(this,name)
//     this.school = school;
// }

// const student = new Student("Géza","Bolyai János Technikum")
// console.log(student.name, student.school);


//_______________________________________________________________________________________
//19.feladat

// class Person{
//     constructor(name){
//         this.name = name;
//     }

   
     
// }

// class Student extends Person{
//     constructor(name, school){
//         super(name);
//         this.school = school;
//     }

   
// }

// const personproperties = new Student("Géza", "Bolyai János Technikum");
// console.log(personproperties.name, personproperties.school)




//_______________________________________________________________________________________
//20.feladat


class Animal{
    constructor(name, sound){
        this.name = name;
        this.sound = sound;
    }
}

class Mammal extends Animal{
    constructor(name, sound, walk){
        super(name, sound);
        this.walk = walk;
    }
 
   

    action(){
        console.log( "a" + this.name +  this.sound + " hallat és " + this.walk);
    }

}

class Bird extends Animal{
    constructor(name, sound, fly){
        super(name, sound);
        this.fly = fly;
    }
   
    action(){
        console.log( "a" + this.name +  this.sound + " hallat és " + this.fly);
    }
}
const  animal1 = new Mammal(' kacsacsőrű emlős', " kacsacsőrű emlős hangokat", "sétál") 
const animal2 = new Bird(' flamingó', " flamingó hangokat", "repül ")

animal1.action();
animal2.action();


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
