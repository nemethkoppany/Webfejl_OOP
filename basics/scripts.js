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
//12.feladattól 
function Person(){
    this.name = "Géza";
}

Person.prototype.GetName = 
function(){
    return this.name
}

Person.prototype.Student = 
function(school){
    this.school = school;
}

const person = new Person();
person.Student("Eötvös Loránd Tudományegyetem");
console.log(person.GetName(), person.school);


//_______________________________________________________________________________________
//19.feladat

// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     nameSeparator(){
//         return ":";
//     }   
// }

// class FullnameOfPerson extends Person{
//     constructor(name, student){
//         super(name);
//         this.student = student;
//     }

//     fullname(){
//         return this.name + super.nameSeparator() + this.student;
//     }
// }

// const personproperties = new FullnameOfPerson("Géza", "Student");
// console.log(personproperties.name);
// console.log(personproperties.fullname());




//_______________________________________________________________________________________
//20.feladat


// class Animal{
//     constructor(name, sound){
//         this.name = name;
//         this.sound = sound;
//     }
//     sound(){
//         return this.sound;
//     }
// }

// class Mammal extends Animal{
//     constructor(name, sound, walk){
//         super(name, sound);
//         this.walk = walk;
//     }
 
//     walk(){
//         return this.walk
//     }

//     action(){
//         console.log( "a" + this.name +  this.sound + " hallat és " + this.walk);
//     }

// }

// class Bird extends Animal{
//     constructor(name, sound, fly){
//         super(name, sound);
//         this.fly = fly;
//     }
//     fly(){
//         return this.fly
//     }
//     action(){
//         console.log( "a" + this.name +  this.sound + " hallat és " + this.fly);
//     }
// }
// const  animal1 = new Mammal(' kacsacsőrű emlős', " kacsacsőrű emlős hangok", "sétál") 
// const animal2 = new Bird(' flamingó', " flmaingó hangok", "repül ")

// animal1.action();
// animal2.action();


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
