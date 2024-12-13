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