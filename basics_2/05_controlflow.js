// control statements in Js
// similar to other lang. you can use if - else statements in Js

let userLoggedIn = true

if (userLoggedIn === true) {
    console.log("User has joined the server");
} else {
    console.log("User failed to join the server");
}

// always do === check in js since == converts datatype if compare
if(1 == "1") { // this returns true cuz of type conversion
    console.log('Correct');
} else {
    console.log('Incorrect');
}
if(1 === "1") { // this returns false due to type check
    console.log('Correct');
} else {
    console.log('Incorrect');
}

if(!userLoggedIn && 1 == "1"){ // like other lang. can use && and || use in Js
    console.log('Yes');
} else {
    console.log('No');
}

if(1 < "1"){ // comparison btw diff datatypes will result in False
    console.log('Yes');
} else {
    console.log('No');
}
    
// Switch cases in Js
let operator = "Admin"
switch (operator) {
    case ("Admin"):
        console.log("Admin has joined the server.");
        break;
    case ("Co-Admin"):
        console.log("Co - admin has joined the server.");
        break;
    case ("Worker"):
        console.log("Worker has joined the server.");
        break;

    default:
        console.log("Unknow entity joined the server");
        break;
}

// null coalescing operator {??} - used to set default values for any values that might get a null or undef value
let n1; 
n1 = 5 ?? 10; // since 5 is a valid value then it will take in 5 as its initial value
console.log(n1);

n1 = null ?? 10 // null is invalid value so it will pass 10 as a defualt value to that variable
console.log(n1);    

// ternary operator is diff from this operator

let myAge = 19
myAge >= 18 ? console.log("I can drive") : console.log("I cannot drive");