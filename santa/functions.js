/**
 * Create a row for the companions table;
 * 
 * @param {Companion} companion 
 */
//Új sor létrehozása a mano adataival
function createRow(companion) {
    const table = document.getElementById('companions');//table element megszerzése az Id-vel
    const tbody = table.querySelector('tbody');//A tbody elem megserzése
    const tableRow = document.createElement('tr');//új tr element kreálása

    tableRow.id = companion.id;//a tr element id-je a companion id-jével egyenlő
    tbody.appendChild(tableRow);

    const name = createCell(tableRow);//A tablerow-n belül cellát kreálunk
    name.innerHTML = companion.teljesnev(); //a cella tartalma az aktuális companion(manó) teljes neve

   

    const reszleg = createCell(tableRow);
    reszleg.innerHTML = companion.reszleg; //A reszleg cella tartalma az aktuális companion részlege

    const action = createCell(tableRow);
    const button = document.createElement('button');//gomb
    button.innerHTML = 'Megtekint';//A gombra ez van ráírva

    

    action.appendChild(button);//ha megnyomod a gombot készít egy új cellát
    button.addEventListener('click', checkEventListener);//Ha a gombra rákattintanak, meghívódik a checkEventListener függvény
}

/**
 * Create a new td cell
 * 
 * @param {HTMLTableRowElement} parentElement 
 * @returns {HTMLTableCellElement}
 */
function createCell(parentElement){
    const newCell = document.createElement('td');//új td element
    parentElement.appendChild(newCell);//hozzárendeljük a parentElementhez a td elementet
    return newCell;//Visszatérés
}

/**
 * 
 * Append a new companion to the selector
 * 
 */
function appendToSelector(mano){
    const productForm = document.getElementById('product')
    const selector = productForm.querySelector('#companionlist');

    const option = document.createElement('option');
    option.value = mano.id;//A az option értéke az aktuális mano id-je
    option.text = mano.teljesnev();// Az option szövege az aktuális manó teljes neve


    selector.appendChild(option);//Az optiont hozzárendeljük a legördülő menühöz
}


/**
 * 
 * Refresh the productlist table
 * 
 * @param {Companion} companion 
 */
function refreshProductList(companion){ 

    const companionName = document.getElementById('companion_name');
    companionName.innerHTML = companion.teljesnev();//a companionName szövege az aktuális manó teljes neve
    companionName.style.display = 'block';// A companionName elem megjelenítését biztosítjuk (alapértelmezett értéke "none") így láthatóvá válik és új sorban jelenik meg 
    const productTable = document.getElementById('products');
    productTable.style.display = 'table';//Táblázatként jelenik meg a productTable
    const productTableBody = productTable.querySelector('tbody')
    productTableBody.innerHTML ='';//Lenullázzuk a táblázat tartalmát
   for(let i = 0; i < companion.produktumok.length; i++){//Végigmegyünk a produktumok listán
    const product = companion.produktumok[i];//product = produktumok aktuális eleme
    const row = document.createElement("tr");//tr elem kreálása
    const td = document.createElement("td");//td elem kreálása
    td.innerHTML = product;//td-bne legyen benne a lista aktuális eleme
    row.appendChild(td);//hozzáadjuk a td-t a tr-hez
    productTableBody.appendChild(row);//A tr-t hozzáadjuk a body-hoz
    
   }
}

/**
 * 
 * Add companion function for the companion formelement
 * 
 * @param {HTMLFormElement} form 
 */
function addCompanion(form, factory) {
    const firstName = form.querySelector('#cfirstname'); 
    const lastname = form.querySelector('#clastname'); 
    const area = form.querySelector('#carea'); 
    const firstNameValue = firstName.value; 
    const lastNameValue = lastname.value; 
    const areaValue = area.value; 

    const id = factory.Id()//id = a gyárban dolgozó aktuális manó id-je
    const uj_mano = new Companion( firstNameValue, lastNameValue, areaValue, id); //Új példány
    factory.addMano(uj_mano); //Hozzáadjuk a gyárhoz a manot
}
/**
 * 
 * Add product function for the productformelement
 * 
 * @param {HTMLFormElement} form 
 */

function addProductForm(form, factory){ 
    const selector =form.querySelector('#companionlist')
    const productName = form.querySelector('#productname')
    const companionId = selector.value;//A companion id-je a a legordülő aktuálisan választott értéke
    const product = productName.value;//A product a termék értéke azaz a neve
    factory.newProductforMano(product, companionId);// A newProductforMano metódust meghívja a termékkel és a kiválasztott manó ID-jével, hogy új terméket rendeljen a manóhoz

}
