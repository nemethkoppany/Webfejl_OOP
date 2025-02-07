const sum =(a,b) =>{
    return a+b;
}
console.log(sum(3,5));
//_____________________________________________________________________
const obj = {}
obj.calculate1 = sum;//calculate1-ez assignoljuk a sum értékét
console.log(obj.calculate1(3,5));
//_____________________________________________________________________
obj.calculate2 = (calccb) => {
    const a = 3;
    const b = 5;
    return calccb(a,b);
};
const res1 = obj.calculate2((szam1,szam2)=>{
    return szam1 + szam2;
});//function implementálása
console.log(res1);

const res2 = obj.calculate2((szam1,szam2) =>{
    return szam1 - szam2;
});
console.log(res2);
//_____________________________________________________________________
obj.calculate3 = (szam1,szam2,callback) =>{
    const res = callback(szam1,szam2);
    return res;
}
const res3 = obj.calculate3(7,8,(szam1,szam2) =>{
    return szam1 * szam2;
});
console.log(res3);
//_____________________________________________________________________
const theFunction= () =>{//closure: ahol megcsinálod a funkciót, azon a scopeon minden elérsz //Itt: A scope a theFunction
    const szam = 10;//scope-on belül megadjuk a szam-ot
    const res4 = obj.calculate2((szam1,szam2) =>{
        return szam1 * szam + szam2;//itt a calculate2 callbackjében is elérjük a szam-ot
    });
    console.log(res4);
};
theFunction();