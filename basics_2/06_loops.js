// For loop
let arr = [1, 2, 3, 4, 5, 6];

// Loop through the array and log each element
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

// Loop from 1 to 9, and break when reaching 5
for (let i = 1; i < 10; i++) {
    if (i === 5) {
        // console.log("We have reached 5");
        break; // Stops the loop when i == 5
    }
    // console.log(i);
}

// Loop from 1 to 9, skipping 5
for (let i = 1; i < 10; i++) {
    if (i === 5) {
        // console.log("Skipping 5");
        continue; // Skips the rest of the iteration when i == 5
    }
    // console.log(i);
}

// While loop
let i = 0;
while (i < arr.length) {
    // console.log(arr[i]);
    i++; // Increment to avoid an infinite loop
}

// Do-While loop
i = 0;
do {
    // console.log(arr[i]);
    i = i + 2; // Skips every second element
} while (i < arr.length);

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