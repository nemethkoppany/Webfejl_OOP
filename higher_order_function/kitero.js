const fv1 = (param1,param2) => {
    return param1 + param2;
};

const fv2 = (param1, param2, callback) => {
    const var1 = callback(param1, 2);
    const var2 = callback(param2, 4);

    return callback(var1,var2);
}

const result1 = fv2(5, 7,(param1,param2) => {
    return param1 + param2;
})

console.log(fv2(5,7,fv1));

const fv3 = (operator) => {
    if(operator === "-"){
        return(param1,param2) =>{
            return param1 - param2;
        }
    }

    if(operator === "*2"){
        const multi = 2;
        return (param1,param2) =>{
            return multi  * (param1 + param2);
        }
    }
}


const substract = fv3("-");
console.log(substract(5, 7));

const fv2Subtract = fv2(5, 7, fv3("-"));
console.log(fv2Subtract);

console.log(fv2(5,7,fv3("*2")));