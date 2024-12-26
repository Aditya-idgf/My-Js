
// For of loop
let str = "Javascript W"
for (const itrator of str) { // this loop itrates over given entity {string, object, array} taking its indiviual value as its itrator value
    // console.log(itrator); // prints individual character of the string str
}

// we have maps in js as : 
let map = new Map();
map.set("IND" , "India");
map.set("USA" , "America");
map.set("JPN" , "Japan");
map.set("PAK" , "Pakistan");
// console.log(map);
map.set("PAK","Semi-Bangladesh") // Keys are unique in map and will only update its value
// console.log("Changed Map : " ,map);

// we use for of loop to itrate in maps
for (const itr of map) {
    // console.log(itr); // this will print values in array of key value pair {[ 'IND', 'India' ]}
}

// we do this for better itration
for (const [key,val] of map) {
    // console.log(`${key} : ${val}`); // this will split the array from erlier in key and value and print them individually
}

// For in loop
const names = "Aditya"
for (const itr in names) {  
    // console.log(names[itr]); // similar to simple for loop but the structure is diff
}

// similar to how we use for of for maps, similarly we use for in for objects