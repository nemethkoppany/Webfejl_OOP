class Area{
    /**
     * @type {HTMLDivElement} az adott area peldany területének az eleme
     */
    #div
    get div(){
        return this.#div
    }

    /**
     * @param {Manager} manager
     * @param {string} cssclass beallitja az adott terület css osztályát 
     */
    constructor(cssclass){
        const container = this.#getcontainer();
        this.#div = document.createElement('div');//Ezen a területen fogunk dolgozni a lszármazottaknál
        this.#div.className = cssclass;
        container.appendChild(this.#div);
        manager.setFinishCallback((eredmeny) => {
            container.innerHTML ="";
            const div = document.createElement("div");
            div.className = "result";
            div.textContent = eredmeny;
            container.appendChild(div)
        })
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
    /**
     * 
     * @param {string} cssclass A css classt tartalmazza 
     * @param {Manager} manager manager példányt tartalmazza
     */
    constructor(cssclass, manager){
        super(cssclass,manager);
        manager.setNextCardCallback((kartyaszoveg) => {// Ez fog lefutni amikor új kártyát húzunk, tehát meghívjuk a nextCardCallbacket
            this.div.innerHTML = "";
            const skipbutton = document.createElement("button");
            skipbutton.textContent = "skip";
            skipbutton.addEventListener("click", () => {
                manager.nextCard();
            })
            this.div.appendChild(skipbutton);
            const cardElement = document.createElement("div");
            cardElement.textContent = kartyaszoveg;
            cardElement.className = "largecard";
            cardElement.addEventListener('click', ()=>{
                manager.nextCard(kartyaszoveg);
            })
            this.div.appendChild(cardElement);
        })
    }
}

/**
 * Ez fogja tartalmazni az igaznak tartott kártyáinkat
 */

class SolutionArea extends Area{
    /**
     * 
     * @param {string} cssclass 
     * @param {Manager} manager 
     */
    constructor(cssclass, manager){
        super(cssclass,manager);
        manager.setAppendCardToSolutionCallback((kartyaszoveg) =>{
            const card = document.createElement("div");
            card.className = "card";
            card.textContent = kartyaszoveg;
            this.div.appendChild(card);
        })
    }
}