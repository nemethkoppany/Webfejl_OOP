class ArrayList{
    /**
     * Ez tárolja el az ArrayList hosszát
     * @type{Number}
     */
    #lenght
    #state
    #arrayHTMLTable

    get Count(){
        return this.#lenght;
    }

    constructor(arrayHTMLTable = undefined){
        this.#lenght = 0;
        this.#state = {};
        this.#arrayHTMLTable = arrayHTMLTable;
    }
    Add(item){
        //Hossz megnövelés
        //Belső objetum beletétele
        //Példány aktuális hosszának eltárolása egy változóban

        //1.
        const index = this.#lenght;

        //2.
        //A belső objektum index tulajdonságának megadjuk a bemeneti paraméter értékét
        this.#state[index] = item;

        //Az aktuális indexel el akarjuk érni(pl.: array[0]) a hozzáadott elemet a példányon keresztül
        Object.defineProperty(this, index, {
            get: () => {
                return this.#state[index]
            },
            set: (value) => {
                this.#state[index] = value
            },
            enumerable: true
        })
        if(this.#arrayHTMLTable){
            this.#arrayHTMLTable.addPersonRow(item);
          }
       
        //3.
        //Inkrementáljuk a lenght tulajdonságot
        this.#lenght++;
    }
    Clear(){
        this.#lenght = 0;
        this.#state = {};
        for(const key in this){
            delete this[key];
        }
    }
  Contains(compare){
    for(let i = 0; i < this.Count; i++){
        if(this.#state[i] == compare){
            return true;
        }
        
    }
    return false;
  }
 
}
const list = new ArrayList();
const item1 = {name: "Banán"};
const item2 = {name: "Alma"};
const item3 = {name: "Alma"};

list.Add(item1);
list.Add(item2);

console.log(list.Contains(item1));
console.log(list.Contains(item2));
console.log(list.Contains(item3));




/*
const pers = {};
pers.a = "Ferenc";
pers["a"] = "Józsi";
pers[0] = "tojás";
console.log(pers);
*/
//_________________________________________________________________________
 //Object.defineProperty()
    //1. objektum érték
    //2. tulajdonság név(string)
    //3. descriptor objektum

/*
const kakas = {};
Object.defineProperty(kakas, "név", {
    value: "Géza",
    writable: true
})
kakas.név = "asd";
console.log(kakas)
*/

class ArrayHTMLElement extends HTMLElement{
    #tbody
    constructor(){
        super();
    }
    connectedCallback(){
        const table = document.createElement("table");
        this.appendChild(table);

        const thead = document.createElement("thead");
        table.appendChild(thead);

        this.#tbody = document.createElement("tbody");
        table.appendChild(this.#tbody);
    }
    /**
    *@param {{nev:string, eletkor:Nuber}} item
    */
    addPersonRow(item){
        const tr = document.createElement("tr");
        this.#tbody.appendChild(tr);

        const nev_td = document.createElement("td");
        nev_td.innerHTML = item.nev;
        tr.appendChild(nev_td);

        const eletkor_td = document.createElement("td");
        eletkor_td.innerHTML = item.eletkor;
        tr.appendChild(eletkor_td);
    }
}
customElements.define("array-table", ArrayHTMLElement)
const ArrayTable = new ArrayHTMLElement();

document.body.appendChild(ArrayTable);

ArrayTable.addPersonRow({nev:"Béla",eletkor:22});

const array = new ArrayList(ArrayTable)
array.Add({nev:"István", eletkor:45})

const button = document.createElement("button");
button.innerHTML = "hozzáad";
document.body.appendChild(button);

button.addEventListener("click", () =>{
    const pers = {nev:"Gergő", eletkor:12}
    array.Add(pers);
})