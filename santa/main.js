/**
 * @type {{
 *   firstName: string;
 *   lastName: string;
 *   products: string[];
 *   area: string;
 * }[]}
 */
const companionList = [
    {
        firstName: 'Géza',
        lastName: 'Kiss',
        area: 'plastic',
        products: ['kisauto', 'barbibaba']
    },
    {
        firstName: 'Ferenc',
        lastName: 'Tóth',
        area: 'paper',
        products: ['könyv']
    },
    {
        firstName: 'Gábor',
        lastName: 'Nagy',
        area: 'plastic',
        products: ['zokni']
    },
]
const factory = new Factory();//A factory új példánya

document.getElementById('companion').addEventListener('submit',function(e){//Figyeli a submitot és az id alapján bekéri a formot
    e.preventDefault();//ez miatt nem submitelődik magától 
    const form =  e.currentTarget//
    addCompanion(form, factory);//Az addcompanion meghívása a gomb lenyomásával
});

document.getElementById('product').addEventListener('submit',function(e){//Ugyan az csak a másik űrlappal
    e.preventDefault();
    const form = e.currentTarget;
    addProductForm(form, factory)
});

/**
 * table render
 */
function initTable() {
    for (let i = 0; i < companionList.length; i++) {//végigmegy a tömbön
        const lista_elem = companionList[i];//az aktuális listaelem
        const mano = new Companion( lista_elem.firstName, lista_elem.lastName, lista_elem.area,i); //Új Companion példány
        for (const product of lista_elem.products) {//végigmegy a listaelem termékein
            mano.produktum(product); //Hozzáadjuk a terméket a manó terméklistájához
        }
        factory.addMano(mano); //A manót hozzáadjuk a manók listájához
        
    }
    console.log(factory);
}

initTable();//Az initTable meghívása

/**
 * 
 * eventlistener callback for the button click of companion
 * 
 * @param {EventTarget} e 
 */
function checkEventListener(e){
    const row = e.currentTarget.parentElement.parentElement;// Az eseményt kiváltó elem (gomb) szülőjének a szülőjét (a táblázat sorát) választjuk ki
    const companionId = row.id;//A sor id-je kiszervezve egy változóba
    factory.ShowProducts(companionId);//az aktuálisan kiválasztott manó(az id-vel választottuk ki) termékeinek kiíratása
}
