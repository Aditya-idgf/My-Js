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
    
