// Js has 2 types of objects - litral and singleton
// Singleton objects are created using constructors and are unique.
// Object.create() can also be used to create singleton objects.

// Literal objects are not unique and can have copies.
const obj = {
  name: "chottaNigga",
  full_name: "chottaNigga Nandedkar",
  age: 69,
  city: "Nanded",

  // Function within the object
  anotherFunctionInObject() {
    // Use regular function to correctly bind 'this'
    console.log(`${this.name} lives in ${this.city}`);
  },
};

console.log(obj.name);
console.log(obj["full_name"]); // Accessing properties using bracket notation

obj.name = "bigNigga"; // Updating object properties
console.log(obj.name);

obj.anotherFunctionInObject();

Object.freeze(obj); // Makes the object immutable
obj.city = "Pune"; // This will not change the city property due to freeze
console.log(obj);

// Symbol datatype example
const sym = Symbol("MyKey1");

const s_obj = {
  sym: "KeyValue1", // This key has a type of string
  [sym]: "KeyValue2", // This key has a type of Symbol

  // Function within the object
  functionInObject() {
    console.log("This is a function in the object");
  },
};

s_obj.functionInObject(); // Function call

// Nested objects
let myUser = {
  fullName: {
    userfullName: {
      fistName: "Aditya",
      lastName: "Chavan",
    },
  },
};
console.log(myUser);
console.log(myUser.fullName);
console.log(myUser.fullName.userfullName);
console.log(myUser.fullName.userfullName.fistName);

let ob1 = { 1 : "a" , 2 : "b"}
let ob2 = { 2 : "a" , 3 : "b"}

console.log({ob1 , ob2}) // this puts these two objects in one : { ob1: { '1': 'a', '2': 'b' }, ob2: { '2': 'a', '3': 'b' } }

// let ob3 = Object.assign(ob1 , ob2) // this will copy all the element from ob2 to ob1
let ob4 = Object.assign({}, ob1 , ob2) // this will copy all the element from ob1 & ob2 to an empty object {}
        // industry standard shit btw
console.log(ob4);

let ob5 = {...ob1,...ob2} // this {...} is the spread operator, does the same shit as assign
console.log(ob5);

// array of objects
let array_obj = [
    {
        1 : "A"
    },
    {
        2 : "B"
    },
    {
        3 : "C"
    }
]
console.log(array_obj)

let user = {
    id : 8965,
    name : "Aditya",
    loggedin : true
}

console.log(Object.keys(user)); // returns all the keys
console.log(Object.values(user)); // returns all the values
console.log(Object.entries(user)); // returrns all the entries in a key value pair
            // [ [ 'id', 8965 ], [ 'name', 'Aditya' ], [ 'loggedin', true ] ]
console.log(user.hasOwnProperty('loggedin')); 
console.log(user.hasOwnProperty('isloggedin'));