function fun(param){
    console.log(param.nev)
}
fun({nev: "Cirmi"});
//------------------------------------------------
const csirke = fun;
csirke({nev:"Csalán"});
//------------------------------------------------
const funA = function(param){
    console.log(param.nev);
}
funA({nev:"II. András, magyar király"});
//------------------------------------------------
const funB = function(){
    console.log(this.nev);
}
const tojas = funB.bind({nev:"Elon musk"});
tojas();
//------------------------------------------------
const funC = (param) => {
    console.log(param.nev);
}
const obj = {
    funA : (param) => {
        console.log(param.nev);
    },
    funB : (param) => {
        console.log(param.eletkor);
    }
}
const pers = {
    nev: "Józsefnádorszéki temető ",
    eletkor: 203
}
obj.funA(pers);
obj.funB(pers);
//------------------------------------------------