// All the primitive datatypes are stored into stack memory and all the non primitive datatypes are stored in heap memory
// Js is a dynamically typed language
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
console.log(typeof func_val); // this will return function

let another_func_val = () =>{ // use functions like this
    console.log('Hello world');
    
}
another_func_val()


let name1 = "aditya"
let name2 = name1
name2 = "rohan" // primitive datatypes create a copy in stack memory instead of pointing to the real space 
console.log(name1);
console.log(name2);

let u1 = {
    name : 'aditya',
    id : 1243
}
let u2 = u1
u2.name = "Zippy" // instead of making a new copy primitive datatypes point to the same space
console.log(u1);
console.log(u2);
