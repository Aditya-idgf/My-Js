console.log("1" > 1);
console.log("01" > 1);
console.log("a" > 1); // string is always lesser than number

console.log(null > "1"); // null is lower than string

console.log(null >= 0); // this returns true
console.log(null == 0); // this returns false

// for undefined, any comparison will return false

// strict comparison === is diff from == 
console.log("1" == 1); // returns true
console.log("1" === 1); // returns false
