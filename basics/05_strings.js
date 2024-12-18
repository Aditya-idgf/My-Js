let myName = "Aditya"
let myVal = 900

console.log(myName + " has " + myVal + " apples"); // dont do this will coding in js
console.log(`${myName} has ${myVal} apples`); // does the same thing, is just more sophisticated

let str_val = new String("ARE U A REAL CODER?") // dynamically creating string
console.log(str_val);
console.log(str_val.__proto__); // string object for that string

// some common string methods
console.log(str_val.length);
console.log(str_val.toLowerCase());
console.log(str_val.charAt(1));
console.log(str_val.indexOf('U')); // returns the first index of that character {is case sensitive}
console.log(str_val.substring(0,4));// use for string {doesnt take -ve values}{incase of -ve values it takes it as 0}
console.log(str_val.slice(-4, -1)); // takes in -ve values

let whitespaces = "    Aditya    "
console.log(whitespaces);
console.log(whitespaces.trim()); // remove excessive whitespaces from the string

console.log(str_val.replace(' ' , '-')); // replaces only the first instance of ' ' with '-' 
console.log(str_val.includes('CODER')); // returns bool value {check the presence of the string}
console.log(str_val.split(' ')); // splits the main string based on the given substring 

console.log(str_val.fontcolor('red')); // output: <font color="red">ARE U A REAL CODER?</font>