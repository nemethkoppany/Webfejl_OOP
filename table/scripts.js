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

        if(this.firstname2 !== "" && this.firstname2 !== undefined){
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
    const form = document.getElementById("form"); 
    for(const pers of array){
        const person = new Person(pers);
        person.render(document.getElementById("tbodyId"));
    }
    const formController = new FormController(form);
    form.addEventListener("submit",function(e){
        e.preventDefault();

        let valid = true;
        if(!formController.lastname){
            valid = false;
        }
        if(!formController.firstname1){
            valid = false;
        }
        if(valid){
        const obj = 
        {
            firstname1: formController.firstname1,
            firstname2: formController.firstname2,
            lastname: formController.lastname
        }
        const person = new Person(obj);
        person.render(document.getElementById("tbodyId"));
    }
    })
}

class FormController{//A formon belüli inputok értékeive tér vissza
    #form
    #errormsg
    constructor(form,errormsg){
        this.#form = form;
        this.#errormsg = errormsg;
    }
    #seterrormsg(id, msg){
        const input = this.#form.querySelector("#" + id);
        const parentElement = input.parentElement;
        const error = parentElement.querySelector(".error");
        if(error){
            error.innerHTML = msg;
        }
    }
    #getInputById(id){
        return this.#form.querySelector("#" + id);
    }
    get lastname(){
        const lastname = this.#getInputById("lastname");
        if(lastname.value.trim() === ""){
            this.#seterrormsg("lastname","A vezetéknév megadása kötelező");
        }
        return lastname.value;
    }
    get firstname1(){
        const firstname1 = this.#getInputById("firstname1");
        if(firstname1.value.trim() === ""){
            this.#seterrormsg("firstname1","A keresztnév megadása kötelező");
        }
        return firstname1.value;
    }
    get firstname2(){
        const firstname2 = this.#getInputById("firstname2");
        if(firstname2.value !== undefined){
        return firstname2.value;
        }
        else{
            this.td_cell.colSpan = 2;
        }
    }
 
}
init();