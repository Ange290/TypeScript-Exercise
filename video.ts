
let val: any ='Hello';
let aa = val.toUpperCase();
let num: number = val;
console.log(aa)

let value : unknown ='world';
if(typeof value === 'string'){
    let str = value.toUpperCase();
}else if (typeof value === 'number'){
    let nu = value *3
    console.log(nu)
}