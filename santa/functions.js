/**
 * Create a row for the companions table;
 * 
 * @param {Companion} companion 
 */
function createRow(companion) {
    const table = document.getElementById('companions');
    const tbody = table.querySelector('tbody');
    const tableRow = document.createElement('tr');

    tableRow.id = companion.id;
    tbody.appendChild(tableRow);

    const name = createCell(tableRow);
    name.innerHTML = companion.teljesnev(); 

   

    const reszleg = createCell(tableRow);
    reszleg.innerHTML = companion.reszleg; 

    const action = createCell(tableRow);
    const button = document.createElement('button');
    button.innerHTML = 'Megtekint';

    

    action.appendChild(button);
    button.addEventListener('click', checkEventListener);
}

/**
 * Create a new td cell
 * 
 * @param {HTMLTableRowElement} parentElement 
 * @returns {HTMLTableCellElement}
 */
function createCell(parentElement){
    const newCell = document.createElement('td');
    parentElement.appendChild(newCell);
    return newCell;
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
    option.value = mano.id;
    option.text = mano.teljesnev();

    selector.appendChild(option);
}


/**
 * 
 * Refresh the productlist table
 * 
 * @param {Companion} companion 
 */
function refreshProductList(companion){ 

    const companionName = document.getElementById('companion_name');
    companionName.innerHTML = companion.teljesnev();
    companionName.style.display = 'block';
    const productTable = document.getElementById('products');
    productTable.style.display = 'table';
    const productTableBody = productTable.querySelector('tbody')
    productTableBody.innerHTML ='';
   for(let i = 0; i < companion.produktumok.length; i++){
    const product = companion.produktumok[i];
    const row = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = product;
    row.appendChild(td);
    productTableBody.appendChild(row);
    
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

    const id = factory.Id()
    const uj_mano = new Companion( firstNameValue, lastNameValue, areaValue, id); 
    factory.addMano(uj_mano); 
}
/**
 * 
 * Add product function for the productformelement
 * 
 * @param {HTMLFormElement} form 
 */

function addProductForm(form, factory){ // TODO
    const selector =form.querySelector('#companionlist')
    const productName = form.querySelector('#productname')
    const companionId = selector.value;
    const product = productName.value;
    factory.newProductforMano(product, companionId);
    // 12
}
