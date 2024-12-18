let val = 100
console.log(val);
let num = new Number(123.456) // we do this to use the methods of the Number class
console.log(num); 

let new_val = num.toString()
console.log(typeof new_val);

console.log(num.toFixed(1)); // Use the `toFixed` method to round the number to 1 decimal place
console.log(num.toPrecision(3)); // Use the `toPrecision` method to format the number to 3 significant digits

let onemill = 1000000
console.log(onemill.toLocaleString()); // output : 1,000,000
console.log(onemill.toLocaleString('en-IN')); // output : 10,00,000

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// js has a Math class to use math operation in it
console.log(Math);

// Some const values in Math class
console.log(Math.PI); // pi value {3.14..}
console.log(Math.E); // exp value {2.718..}

// Some common methods
console.log(Math.abs(-200)); // absolute value
console.log(Math.round(8.7)); // round value
console.log(Math.ceil(9.7)); // ceiling value
console.log(Math.floor(9.2)); // floor value
console.log(Math.min(1,45,62,14)); // returns minimum value from provied values
console.log(Math.max(1,45,62,14)); // returns maximum value

// Use of random values
console.log(Math.random()); // random value between 0-1
console.log(Math.floor(Math.random() * 10) + 1);

// to get value in range u can do : 
let min = 10
let max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);