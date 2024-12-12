

class Factory {
    constructor() {
        this.manoLista = []; 
        this.reszlegLista = [];
    }

    Id() {
        return this.manoLista.length; 
    }

    addMano(mano) {
        this.manoLista.push(mano);
        createRow(mano); 
        appendToSelector(mano);
    }
    ShowProducts(id){
        for(let i = 0; i < this.manoLista.length;i++){
            if(this.manoLista[i].id == id){
                refreshProductList(this.manoLista[i])
            }
        }
    }

    newProductforMano(product, manoid){
        for(let i = 0; i < this.manoLista.length; i++){
            if(this.manoLista[i].id == manoid){
                 this.manoLista[i].produktum(product);
                 this.ShowProducts(manoid);
            }
        }
    }

    addReszleg(reszleg){
        this.reszlegLista.push(reszleg);
    }
}

class Companion {
    constructor(keresztnev, vezeteknev, reszleg, id) {
        this.id = id; 
        this.keresztnev = keresztnev; 
        this.vezeteknev = vezeteknev; 
        this.reszleg = reszleg; 
        this.produktumok = [];
    }
    

    teljesnev() {
        return this.keresztnev + " " + this.vezeteknev; 
    }

    produktum(produktum) {
        this.produktumok.push(produktum); 
    }

    
}