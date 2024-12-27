const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// for checking condition with a for each loop we need to do it like this :
books.forEach((val) => {  // this way we kind of filter values based on property
    if(val.genre === 'History' && val.publish >= 1990){ // we can filter based on multiple values
        // console.log(val);
    }
})

// for doing this we use a filter function in arrays
let filterdValues = books.filter((bk) => bk.genre === 'Science') // this filters and returns value to filterdValues variable
// console.log(filterdValues);         // since it was only a line of code so we didnt add {} , if we wrote the code in {} 
                                                // always add 'return' keyword to specify which value to return 

// returns an array btw

filterdValues = books.filter((bk) => {
    return bk.genre ===  'Fiction' && bk.edition > 2005 // like this 
})
// console.log(filterdValues);

// Map function
// Map is similar to forEach but it returns a new array
let nums = [1,7,6,4,2,8,9,5,3];

// Corrected map function (use the correct array name: "nums")
let newNums = nums.map((num) => num + 10); // Adding 10 to each element
// console.log("New numbers after adding 10:", newNums);

// Chaining map, filter, etc.
newNums = nums
    .map((num) => num * 10) // Multiply each number by 10
    .map((num) => num - 10) // Subtract 10 from each result
    .filter((num) => num > 50); // Filter numbers greater than 50
console.log("Chained result:", newNums);
