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
        console.log(`${this.name} lives in ${this.city}`);
    }
};

console.log(obj.name);
console.log(obj["full_name"]); // Accessing properties using bracket notation

obj.name = 'bigNigga'; // Updating object properties
console.log(obj.name);

obj.anotherFunctionInObject();

Object.freeze(obj); // Makes the object immutable
obj.city = "Pune"; // This will not change the city property due to freeze
console.log(obj);

// Symbol datatype example
const sym = Symbol('MyKey1');

const s_obj = {
    sym: "KeyValue1", // This key has a type of string
    [sym]: "KeyValue2", // This key has a type of Symbol

    // Function within the object
    functionInObject() {
        console.log("This is a function in the object");
    }
};

s_obj.functionInObject(); // Function call
