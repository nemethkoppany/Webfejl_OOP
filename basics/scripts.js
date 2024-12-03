//Órai anayg

// function player(nickname){//player function deklarálása, 
//     this.nickname = nickname; //értéket adunk a playeren belül lévő propertynek
//     this.playedMatch = 0;//itt is
// }

// player.prototype.play = //deklarálunk egy play functiont amit alárendelünk a playernek, ezzel deklaráljuk a tevékenységet
// function(){
// this.playedMatch++; //Mindek alkalommal amikor lefut a függvény hozzáadodik egy pont a playedMatche-hez //Ezzel szimuláljuk a játszott körök számát
// console.log(this.nickname, this.playedMatch);//Kiíratjuk az eredményeinket a konzolra.
// }

// player.prototype.getTierLevel = //deklarálunk egy getTierLevel functiont amit alárendelünk a playernek
// function(){//Ha a játszott meccsek száma kisebb mint 4, térjen vissza egy A-val, ha 3-nál nagyobb, de 7-nél kisebb térjen vissza egy B-vel, minden más esetben térjen vissza egy C-vel
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
  

//    console.log(player.nickname, player.getTierLevel());//Kiírja a játékos nevét és a szintjét(A,B,C)

// }


// _______________________________________________________________________________________
// //12.feladattól(néhány helyen átalakítva) 
// function Person(name){ //Person function deklarálása
//     this.name = name; //értéket adunk a Person-ön belül lévő propertynek
   
// }



// function Student(name, school){ //Student function deklarálása
//     Person.call(this,name) //A Peron.call-al bekérjük a Person functionben lévő propertynek az értékét
//     this.school = school;//értékadás
// }

// const student = new Student("Géza","Bolyai János Technikum")//új objektum létrehozása, a Student egy példánya
// console.log(student.name, student.school);//Kiíratás


// _______________________________________________________________________________________
// //19.feladat

// class Person{ //Person class deklarálása, ezt már a 2015 utáni módszerrel teszzük.
//     constructor(name){ //tulajdonságok kreálása
//         this.name = name;
//     }

//     GetName(){//"cselekvés" kreálása
//         return this.name;//A függvény visszatér a névvel
//     }
     
// }

// class Student extends Person{//Egy Student osztály, ami a Person osztályt bővíti
//     constructor(name, school){
//         super(name);//A name tulajdonság ugyan az mint a Person osztályban
//         this.school = school;
//     }

   
// }

// const person = new Student("Géza", "Bolyai János Technikum");//person objektum, a Student egy példánya
// console.log(person.name, person.school)//kiíratás a console-ra




// //_______________________________________________________________________________________
//20.feladat


// class Animal{//Animal class létrehozása
//     constructor(name, sound){//Tulajdonságok megadása
//         this.name = name;//Minden állatnak van neve
//         this.sound = sound;//Minden állat tud hangot kiadni
//     }
//     sounds(){//Cselekvés létrehozása
//         console.log(this.name + this.sound + " hallat");//Kiíratja a console-ra, hogy milyen állat, milyen hangot ad ki.
//     }
// }

// class Mammal extends Animal{//Hozzákötünk egy Mammal osztályt az Animals-hoz
//     constructor(name, sound){//Tulajdonságok
//         super(name, sound);//Az Animal-ban megadott név és hang tulajdonságokat hozzákötjük a Mammal-hoz
//     }
 
//    walk(){//Cselekvés: tud sétálni az emlős(ez az elnevezés kissé zavaró lehet egy bálna esetén)
//     console.log(`${this.name} sétál`);//kiíratás
//    }

    

// }

// class Bird extends Animal{//Hozzákötünk egy Bird osztályt az Animals-hoz
//     constructor(name, sound){//Tulajdonságok
//         super(name, sound);//Az Animal-ban megadott név és hang tulajdonságokat hozzákötjük a Bird-höz
//     }
//     fly(){//Cselekvés: tud repülni a madár(zavaró elnevezés a pingvin esetén)
//         console.log(`${this.name} repül`)
//     }
   
  
// }
// //Két új pédány deklarálása, az egyik a Mammal-é, a másik a Bird-é
// const  animal1 = new Mammal(' kacsacsőrű emlős', " kacsacsőrű emlős hangokat") 
// const animal2 = new Bird(' flamingó', " flamingó hangokat")


// //Cselekvések meghívása
// animal1.walk(); 
// animal1.sounds();

// animal2.fly();
// animal2.sounds();


// _______________________________________________________________________________________
// //Órai anyag

// Lénegében ugyan az mint ami a kód elején van, csak ez a 2015 utáni megoldás
// class player{//Player class deklarálása
//     constructor(nickname){//Tulajdonságok megadása
//         this.nickname = nickname;
//         this.playedMatch = 0;
//     }

//     play(){//Play metódus (hozzá van kötve a Player-hez mert benne van a classban)
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


// const gomszab = new player("gomszab");//A player egy példánya


//Azért kell máshogy kiíratni a dolgokat mert egyes függvényeknél már magában a függvényben kiíratjuk az eredményt, míg másoknál csak visszatérünk egy értékkel amit később kell kiíratni
//gomszab.play();//A play függvény meghívása a gomszab példányon belül megadott értékekkel
//console.log(gomszab.getTierLevel());
//printTierLevel(gomszab);
//gomszab.printTierLevel();
