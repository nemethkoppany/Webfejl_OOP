
class Factory {
    constructor() {//A Factory tulajdonságai
        this.manoLista = []; 
        this.reszlegLista = [];
    }
    //A factory "cselekvései"
    Id() {
        return this.manoLista.length; //Visszaadja a lista hosszát
    }

    addMano(mano) {
        this.manoLista.push(mano);//a mano-t hozzáadja a listához
        createRow(mano); //új sor létrehozása a mano objektum(nak)
        appendToSelector(mano);//hozzáadja a mano-t a legördülő menühöz
    }
    ShowProducts(id){
        for(let i = 0; i < this.manoLista.length;i++){//végigjárunk a listán
            if(this.manoLista[i].id == id){//Ha a manoListában lévő aktuális elem id-je megegyezik a keresendő id-vel
                refreshProductList(this.manoLista[i])//Akkor azzal az elemmel frissítse a terméklistát
            }
        }
    }

    newProductforMano(product, manoid){
        for(let i = 0; i < this.manoLista.length; i++){
            if(this.manoLista[i].id == manoid){//Ha a manoLista aktuális elemének id-je megegyezik az keresett manoid-vel
                 this.manoLista[i].produktum(product);//Akkor a manolista aktuális eleméhez hozzárendeljük a terméket
                 this.ShowProducts(manoid);// és manoid értéket átadjuk a ShowProducts függvénynek, hogy frissítse a manó terméklistáját

            }
        }
    }

    addReszleg(reszleg){
        this.reszlegLista.push(reszleg);//a reszleglistához hozzáadja az aktuális részleget
    }
}

class Companion {
    //A companion tulajdonságai
    constructor(keresztnev, vezeteknev, reszleg, id) {
        this.id = id; 
        this.keresztnev = keresztnev; 
        this.vezeteknev = vezeteknev; 
        this.reszleg = reszleg; 
        this.produktumok = [];
    }
    

    teljesnev() {
        return this.keresztnev + " " + this.vezeteknev; //Visszatér a manó teljes nevével
    }

    produktum(produktum) {
        this.produktumok.push(produktum); //Hozzáadja az aktuális terméket a produktumok listához
    }

    
}