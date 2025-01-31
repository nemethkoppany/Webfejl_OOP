/**
 * @typedef {{nev: string , eletkor : Number}} Person
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
            if(elem.eletkor === age){
                result.push(elem);
            }
        }
        this.#updatecallback(result);
    }
    /**
     * 
     * @param {String} name 
     */
    fiterName(name){
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
    /**
     * 
     * @param {Datamanager} datamanager 
     */
    constructor(datamanager){
        const table = document.createElement("table");
        document.body.appendChild(table);

        const tbody = document.createElement("tbody");
        table.appendChild(tbody);

        datamanager.setUpdateCallback(
            (persons) => {
                tbody.innerHTML = "";
                for(const pers of persons){
                    const tr = document.createElement("tr");
                    tbody.appendChild(tr);
                    const td1 = document.createElement("td");
                    td1.innerHTML = pers.nev;
                    tr.appendChild(td1);
                    const td2 = document.createElement("td");
                    td2.innerHTML = pers.eletkor;
                    tr.appendChild(td2);
                }
            }
        )
        }
    
}
const datamanager = new Datamanager([{nev:"János", eletkor:34},{nev:"Ferenc", eletkor:54},{nev:"István", eletkor:12}]);
const table = new Datatable(datamanager);

const input = document.createElement("input");
document.body.appendChild(input);s
input.addEventListener('input', function(e){

})