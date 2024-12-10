
// TODO 1, 2, 3, 4, 9, 10
class Factory {
    constructor() {
        this.manoLista = []; 
    }

    Id() {
        return this.manoLista.length; 
    }

    addMano(mano) {
        this.manoLista.push(mano);
        createRow(mano); 
    }
}
// TODO 5
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