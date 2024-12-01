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
    sounds(){
        console.log(this.name + this.sound + " hallat");
    }
}

class Mammal extends Animal{
    constructor(name, sound){
        super(name, sound);
    }
 
   walk(){
    console.log(`${this.name} sétál`);
   }

    

}

class Bird extends Animal{
    constructor(name, sound, fly){
        super(name, sound);
    }
    fly(){
        console.log(`${this.name} repül`)
    }
   
  
}
const  animal1 = new Mammal(' kacsacsőrű emlős', " kacsacsőrű emlős hangokat") 
const animal2 = new Bird(' flamingó', " flamingó hangokat")



animal1.walk(); 
animal1.sounds();



animal2.fly();
animal2.sounds();


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
