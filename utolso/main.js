class Person{
    #name 
    #birth
    #mood

    constructor(name,birth,mood){
        this.#name = name;
        this.#birth = birth;
        this.#mood = mood;
    }

    //name
    get name(){
        return this.#name
    }

    set name(value){
        this.#name = value;
    }

    //birth
    get birth(){
        return this.#birth;
    }

    //mood
    set mood(value){
        this.#mood = value;
    }
}

const person = new Person("Kálmán", "1918", "angry")//visszatérési érték, a példány

class PersonView{
    #person
    #span

    constructor(person){//Ide nem kell span-t írni mert a constructoron belül hozzuk létre
        this.#person = person; //Ennek nem kell [get set]
        
        //div
        const div = document.createElement("div");
        document.body.appendChild(div);
        div.innerText = `${this.#person.name} - ${this.#person.birth}`;

        //span
        const span = document.createElement("span");
        this.#span = span;
        document.body.appendChild(span);
    }

   set footer(value){
    this.#span.textContent = value;
   }
}

const personView = new PersonView(person);

person.mood = "happy";// settelünk egy új hangulatot(értéket)
console.log(person);

//Újabb példányosítás
const personView2 = new PersonView(person);
personView2.footer = "lábléc"; //Adunk a footernek egy értéket