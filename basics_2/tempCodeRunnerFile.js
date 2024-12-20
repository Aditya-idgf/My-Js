let arr = [null, true, [2, 3, 4], "5", 6, undefined];
console.log(arr[2]);

let new_arr = new Array(25, 32, 13, 54, 15); // using array class
console.log(new_arr.length);

// common methods
new_arr.push(100); // add value at last
console.log(new_arr);

new_arr.pop(); // remove value at last
console.log(new_arr);

new_arr.unshift(99); // adds a new element at the start of the array
console.log(new_arr);

new_arr.shift(99); // removes a new element at the start of the array
console.log(new_arr);

new_arr.sort(); // sorts array
console.log(new_arr);

console.log(new_arr.includes(100)); // checks for the presence of the value
console.log(new_arr.indexOf(100)); // returns the index of the first match

let str_arr = new_arr.join(); // converts array to a string
console.log(str_arr);
console.log(typeof str_arr);

console.log(new_arr.slice(1, 3)); // return elements starting from 1st and till 2nd value {3-1}
// console.log(new_arr.splice(1,3)); // similar to slice but till 3rd value
// this splice shit also removes these elements from the array while returning them

arr.push(new_arr); // push the entire 2nd array in 1st one
console.log(arr);
arr.pop();

let c_arr = arr.concat(new_arr); // this joins the 1st arrays end to the 2nd arrays start
console.log(c_arr);

let an_c_arr = [...arr, ...new_arr]; // same as concate but better
console.log(an_c_arr);

let multi_d_arr = [1, [2, 3, [4, 5], 6, [7]], 8, 9];
console.log(multi_d_arr);
multi_d_arr = multi_d_arr.flat(Infinity); // makes this multi-d array into a 1-d array
console.log(multi_d_arr);

console.log(Array.isArray("Aditya")); // checks if the given variable is array
console.log(Array.isArray(arr));
console.log(Array.from("Aditya")); // convets anything inside it to an array

let val1 = 100;
let val2 = 200;
let val3 = 300;

console.log(Array.of(val1, val2, val3)); // combines individual elements into an array