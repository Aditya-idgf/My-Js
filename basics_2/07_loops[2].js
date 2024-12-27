
// For of loop
let str = "Javascript W"
for (const itrator of str) { // this loop itrates over given entity {string, object, array} 
                                    // taking its indiviual value as its itrator value
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
    // console.log(`${key} : ${val}`); // this will split the array from erlier in key 
                                        // and value and print them individually
}

// For in loop
const names = "Aditya"
for (const itr in names) {  
    // console.log(names[itr]); // similar to simple for loop but the structure is diff
}

// similar to how we use for of for maps, similarly we use for in for objects
let obj = {
    js : "Javascript",
    cpp : "C++",
    rb : "ruby",
    py : "Python"
}

for (const itr in obj) {
    // console.log(itr); // this prints our keys
    // console.log(obj[itr]); // this prints our values 
    // like this we itrate through and object using for in loop
}

let arr = ["js","cpp","py","rb"]
for (const itrator in arr) {
    // console.log(itrator); // itrator goes over only the indexes of the array
    // console.log(arr[itrator]); // this way we can acess array values
}                       // for object keys were considerd there indexes

for (const itr in map) { // with for in loop we cant itrate over maps
    console.log(itr);
    console.log(map[itr]);
}

// For Each loop
arr.forEach( function (val){
    // console.log(val);
} )

arr.forEach((itr)=> {
    // console.log(itr);
})

function printFn(item){ // here a function is created else where
    // console.log(item);
}
arr.forEach(printFn) // here dont give () cuz we aint calling it here
        // we are just passing the reference to that function in forEach loop

arr.forEach( (val , index , array) => { // in for each loop we have 3 parameters
    // console.log(val , index , array);   // value , index , and the whole array
} )    

// most useful for array of objects:
let arr_obj = [
    {
        langName : "Javascript",
        langCode : "js"
    },
    {
        langName : "Python",
        langCode : "py"
    },
    {
        langName : "C++",
        langCode : "cpp"
    }
]
arr_obj.forEach( (itr) => {
    console.log(itr.langName,itr.langCode);
})