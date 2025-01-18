class ArrayList{
    /**
     * Ez tárolja el az ArrayList hosszát
     * @type{Number}
     */
    #lenght
    #state

    get Count(){
        return this.#lenght;
    }

    constructor(){
        this.#lenght = 0;
        this.#state = {};
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
            get: function(){
                return this.#state[index]
            },
            set:function(value){
                this.#state[index] = value
            },
            writable: true,
            enumerable: true
        })

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
  
   
}
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