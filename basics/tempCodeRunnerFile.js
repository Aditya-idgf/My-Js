// Js has 7 primitive datatypes: Number , String , Boolean , null , undefined , symbol {provide unique values for variables}
let num_val = 123456
let str_val = "Aditya"
let bool_val = true
let null_val = null
let undef_val;
let sym_val1 = Symbol(num_val)
let sym_val2 = Symbol(num_val)

console.log([num_val, str_val , bool_val, null_val, undef_val , sym_val1 , sym_val2]); // even though sym_val1 & 2 have same value in print 
console.log(sym_val1 === sym_val2); // they are not the same 

// other Reference {non - primitive} datatypes include {arrays , objects , functions}
let arr_val = [1,2,3,4,5] // array
console.log(arr_val) 
console.log(typeof arr_val) // for arrays its typeof will return object

let obj_val = {           // object
    name : "Aditya",
    age : 90
}
console.log(obj_val)

let func_val = function(){// function{dont make it like this} {return type is called a object function}
    console.log('Hello World');   
}
func_val()
console.log(typeof func_val);


let another_func_val = () =>{ // use functions like this
    console.log('Hello world');
    
}
another_func_val()