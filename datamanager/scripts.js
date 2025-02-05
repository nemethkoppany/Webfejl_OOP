/**
 * @typedef {{nev: string , eletkor : number}} Person
 * @callback UpdateCallback
 * @param {Person[]} Person
 * @returns {void}
 */

class Datamanager{
      /**
     * @type {Person[]}
     */
      #array
      /**
       * @type {UpdateCallback updatecallback}
       */
      #updatecallback
    /**
     * @param {Person} array
     */
    constructor(array = []){
        this.#array = array;

        this.#updatecallback = () => {

        }
    }
    /**
     * 
     * @param {UpdateCallback} callback 
     */
    setUpdateCallback(callback){
        this.#updatecallback = callback;
        this.#updatecallback(this.#array);
    }
    /**
     * 
     * @param {Person} item 
     */
    Add(item){
        this.#array.push(item)
        this.#array;
    }
    /**
     * 
     * @param {Number} age 
     */
    filterAge(age){
        const result = []
        for(const elem of this.#array){
            if(elem.eletkor == age){
                result.push(elem);
            }
        }
        this.#updatecallback(result);
    }
    /**
     * 
     * @param {String} name 
     */
    filterName(name){
        const result = []
        for(const elem of this.#array){
            if(elem.nev.includes(name)){
                result.push(elem);
            }
        }
        this.#updatecallback(result);
    }
  

    
}
class Datatable{
    #tbody
    /**
     * 
     * @param {Datamanager} datamanager 
     */
    constructor(datamanager){
        const table = document.createElement("table");
        document.body.appendChild(table);

        this.#tbody = document.createElement("tbody");
        table.appendChild(this.#tbody);

        datamanager.setUpdateCallback(
            (persons) => {
               this.#renderTable(persons);
            }
        )
    }
    #renderTable(persons){
        this.#tbody.innerHTML = "";
        for(const person of persons){
            const tr = document.createElement("tr");
            this.#tbody.appendChild(tr);

            const td = document.createElement("td");
            td.innerHTML = person.nev;
            tr.appendChild(td);

            const td_2 = document.createElement("td");
            td_2.innerHTML = person.eletkor;
            tr.appendChild(td_2);
        }
    }
    
}
const datamanager = new Datamanager([{nev:"János", eletkor:34},{nev:"Ferenc", eletkor:54},{nev:"István", eletkor:12}]);
const table = new Datatable(datamanager);

const input = document.createElement("input");
document.body.appendChild(input);
input.addEventListener('input', function(e){
    datamanager.filterName(input.value);
});

const input_2 = document.createElement("input");
document.body.appendChild(input_2);
input_2.addEventListener('input', function(e){
    const AgeValue = Number(input_2.value);
    datamanager.filterAge(AgeValue);
});