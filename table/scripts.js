const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

class Person{
    constructor(obj){
        this.firstname1 = obj.firstname1;
        this.firstname2 = obj.firstname2;
        this.lastname = obj.lastname;
    }
    render(parentElement){
        const row = document.createElement("tr");
        parentElement.appendChild(row);

        const td_cell3 = document.createElement("td");
        td_cell3.innerHTML = this.lastname;
        row.appendChild(td_cell3);

        const td_cell = document.createElement("td");
        td_cell.innerHTML = this.firstname1;
        row.appendChild(td_cell);

        if(this.firstname2 !== undefined){
            const td_cell2 = document.createElement("td");
            td_cell2.innerHTML = this.firstname2;
            row.appendChild(td_cell2);
        }
        else{
            td_cell.colSpan = "2";
        }
        
        

    }
}

function init(){
    for(const pers of array){
        const person = new Person(pers);
        person.render(document.getElementById("tbodyId"));
    }
}

init();

class formController{//A formon belüli inputok értékeive tér vissza
    #form
    constructor(form){
        this.#form = form;
    }
    #getInputById(id){
        return this.#form.querySelector("#" + id);
    }
    get lastname(){
        const lastname = this.#getInputById("lastname");
        return lastname.value;
    }
    get firstname1(){
        const firstname1 = this.#getInputById("firstname1");
        return firstname1.value;
    }
    get firstname2(){
        const firstname2 = this.#getInputById("firstname2");
        return firstname2.value;
    }
}