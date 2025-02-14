/**
 * Ez egy entitás amit a manager osztályunk kezelni fog(lesz egy array a managerben és abban lesznek ezek)
 */

class Card{
    /**
     * @type {string}
     */
    #text;
    /**
     * @type {boolean}
     */
    #correct;

    /**
     * @returns {string} a kártya szöveges tartalma
     */
    get text(){
        return this.#text
    }

    /**
     * @returns {boolean} A válasz igazság értéke
     */
    get correct(){
        return this.#correct;
    }

    /**
     * 
     * @param {string} text A kártya szövege 
     * @param {boolean} correct A kártya igaz-e 
     */
    constructor(text, correct){
        this.#text = text;
        this.#correct = correct;
    }
}