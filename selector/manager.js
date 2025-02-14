/**
 * @callback nextCardCallback 
 * @param {string} Text A kirendelendő kártya szövege
 * 
 * @callback appendCardToSolutionCallback
 * @param {string} text A kártya szövege
 * 
 * @callback finishCallback
 * @param {string} result Ami az eredményt tartalmazza
 */

/**
 * A kommunikációért felel a deck és az AreaSolution között
 */
class Manager{
    /**
     * @type {Card[]}
     */
    #array;

    /**
     * @type {Object} Az igaznak vélt állításokat fogja tartalmazni
     */
    #solution

    /**
     * @type {Number} Az aktuális kártya száma
     */
    #currentCardNumber;


    /**
     * @type {nextCardCallback}
     */
    #nextCardCallback;

    /**
     * @type {appendCardToSolutionCallback}
     */
    #appendCardToSolutionCallback;

    /**
     * @type {finishCallback}
     */
    #finishCallback;

    /**
     * 
     * @param {Card[]} array A kártyák tömbje
     */
    constructor(array){
        this.#array = array;
        this.#solution = {};
        this.#currentCardNumber = 0;
    }

    /**
     * 
     * 
     * Beállítja a paraméter alapján a nextCardCallback
     * 
     * @param {nextCardCallback} callback Tartalmazza a logikát ami le fog futni amikor meghívjuk a függvényünket 
     */
    setNextCardCallback(callback){
        this.#nextCardCallback = callback;
    }

      /**
     * 
     * 
     * Beállítja a paraméter alapján a appendCardToSolutionCallback
     * 
     * @param {appendCardToSolutionCallback} callback Tartalmazza a logikát ami le fog futni amikor meghívjuk a függvényünket 
     */
      setAppendCardToSolutionCallback(callback){
        this.#appendCardToSolutionCallback = callback;
    }

      /**
     * 
     * 
     * Beállítja a paraméter alapján a finishCallback
     * 
     * @param {finishCallback} callback Tartalmazza a logikát ami le fog futni amikor meghívjuk a függvényünket 
     */
      setFinishCallback(callback){
        this.#finishCallback = callback;
    }

    /**
     * 
     * Ezt a függvényt akkor hívjuk majd meg ha egy új kártyára van szükségünk (Ha a kártyára kattintunk paraméterrel)
     *  vagy a skipre (paraméter nélkül)
     * @param {string?} answer
     */
    nextCard(answer){
        if(answer){//Ha a kártyára kattintva lépünk eltároljuk az aktuális választ
            this.#solution[this.#currentCardNumber] = answer;
            this.#appendCardToSolutionCallback(answer);
            //a solution objektumba csak azoknak a kártyáknak a számánál lesz érték amit igaznak vélünk
        }
        this.#currentCardNumber++;
        if(this.#currentCardNumber < this.#array.length){
            this.#nextCardCallback(this.#array[this.#currentCardNumber].text);
        }else{
            let sum = 0;
            for(const index in this.#array){
                if(this.#array[index].correct){
                    if(this.#solution[index]){
                        sum++;
                    }
                }else{
                    if(!this.#solution[index]){
                        sum++;
                    }
                }
            }
            const result = `A feladatban elért pontszám az ${this.#array.length}/${sum}`;
            this.#finishCallback(result);
        }
    }

    /**
     * Felhúzza az első kártyát(megmutatja az első kártya taralmát)
     */
    start(){
        this.#nextCardCallback(this.#array[0].text) //ugyanaz mint ez this.#nextCardCallback(this.#array[this.#currentCardNumber].text)   
    }
}