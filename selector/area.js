class Area{
    /**
     * @type {HTMLDivElement} az adott area peldany területének az eleme
     */
    #div
    get div(){
        return this.#div
    }

    /**
     * 
     * @param {string} cssclass beallitja az adott terület css osztályát 
     */
    constructor(cssclass){
        const container = this.#getcontainer();
        this.#div = document.createElement('div');//Ezen a területen fogunk dolgozni a lszármazottaknál
        this.#div.className = cssclass;
        container.appendChild(this.#div);
    }

    /**
     *  @return {HTMLDivElement} ami az area szülő div containere 
     */
    #getcontainer(){
        let container = document.querySelector('.container');
        if(!container){
            container = document.createElement("div");
            container.className = 'container';
            document.body.appendChild(container);
        }
        return container;
    }

}


/**
 * Ez fogja tartalmazni a paklinkat, mindig egy darab kártyát jelenít meg
 */
class DeckArea extends Area{
    constructor(cssclass){
        super(cssclass)
    }
}

/**
 * Ez fogja tartalmazni az igaznak tartott kártyáinkat
 */
class SolutionArea extends Area{
    constructor(cssclass){
        super(cssclass)
    }
}