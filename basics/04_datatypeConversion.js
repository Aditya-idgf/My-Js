let val = "12"
console.log(typeof val); // here our value was 12 {string}

let intVal = Number(val) // here we converted our values to 12 {number} 
console.log(intVal);
console.log(typeof intVal); // here it will show number

let new_val = "123A"
let new_intVal = Number(new_val) // this will lead to a invalid conversion that will return values NaN {not a number}
console.log(new_intVal); // this prints NaN
console.log(typeof new_intVal); // this will print {number} 

// from string to number : if string has a valid number only then a conversion will occure and value will be returned, else there will be NaN value 
// from boolean to number : if bool is "true" then it will return 1, else 0
// from null to number : it will return 0 in this case