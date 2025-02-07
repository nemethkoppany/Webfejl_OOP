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
        this.#array.push(item);
        this.#updatecallback(this.#array);
    }
   
    /**
     * 
     * @param {Number} age 
     */
    /* 
    //Ennek a munkáját átvette a filter függvény
    filterAge(age){
        const result = []
        for(const elem of this.#array){
            if(elem.eletkor == age){
                result.push(elem);
            }
        }
        this.#updatecallback(result);
    }
    */
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
    //<----------------2025.02.07 kezdet---------------->
    /**
     * @param {function (Person):boolean }
     */
    filter(callback){
        const result = []
        for(const elem of this.#array){
            if(callback(elem)){
                result.push(elem);
            }
        }
        this.#updatecallback(result);
    }

    orderbyAge(){
        const result = []
        for(const elem of this.#array){
            result.push(elem);
        }
        for(let i = 0; i < result.length - 1; i++){
            for(let j = i + 1; j < result.length; j++){
                if(result[i].eletkor < result[j].eletkor){
                    const tmp = result;
                    result[i] = result[j];
                    result[j] = tmp;
                }
            }
        }
        this.#updatecallback(result);
    }

    //Ez még nagyon nem jó!!!
    orderbyName(){
        const result = []
        for(const elem of this.#array){
            result.push(elem);
        }
        for(let i = 0; i < result.length - 1; i++){
            for(let j = i + 1; j < result.length; j++){
                if(){
                    const tmp = result;
                    result[i] = result[j];
                    result[j] = tmp;
                }
            }
        }
        this.#updatecallback(result);
    }
    //<----------------2025.02.07 vége--------------->
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
//<----------------2025.02.07 kezdet---------------->
const input_2 = document.createElement("input");
document.body.appendChild(input_2);
input_2.addEventListener('input', function(e){
    const AgeValue = Number(input_2.value);
    //datamanager.filterAge(AgeValue);
    datamanager.filter((pers)=>{
        return pers.eletkor === AgeValue;
    })
});

//_____________________________________________________________________
const input_3 = document.createElement("input");
document.body.appendChild(input_3);
input_3.type = "file";
input_3.addEventListener('change', function(e){
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) =>{
        
        const fileContent = reader.result;//Lehet e.currentTarget de nem kell feltétlenül ezt használni a closure miatt
        console.log(fileContent);

        const split_content = fileContent.split("\n");

        for(const splity of split_content){
            const data = splity.split(";");
            
            const pers = {
                nev: data[0],
                eletkor:Number( data[1])
            };
            datamanager.Add(pers);
        };
    };
});
//<----------------2025.02.07 vége---------------->
//_____________________________________________________________________
