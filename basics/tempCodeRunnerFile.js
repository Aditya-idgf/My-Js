// remember in js month starts from 0 not 1 {0 -> January}

let d = new Date() // used for retriving current data and time 
console.log(d.toString());
console.log(d);

// Date and time in diff formates
console.log(d.toDateString()); // {Day of the week} {Month} {Date} {Year} formate
console.log(d.toTimeString()); // Ex: 19:08:20 GMT+0530 (India Standard Time)
console.log(d.toISOString());
console.log(d.toJSON());
console.log(d.toLocaleDateString(), "\n"); // prints in MM/DD/YYYY formate

let new_d = new Date("2024-12-19")
console.log(new_d.toDateString(), "\n");

let an_new_d = new Date(2024,11,19 , 19 , 8,20)
console.log(an_new_d.toDateString());
console.log(an_new_d.toLocaleString()); // MM/DD/YYYY , converts 24hrs formate to 12hrs and shows time with am or pm
console.log(an_new_d.toTimeString());

console.log(d.getTime()); // calculate the number of millisec passed b/w 1st jan 1970 till now
console.log(Date.now()); // does the same thing as .gettime() but we can pass gettime a specific date for ex: {go to next line}

console.log(new_d.getTime()); // this tells millisec passed till that date

console.log(d.getDate());
console.log(d.getMonth() + 1); // add +1 so that ur months start from 1 not 0 
console.log(d.getFullYear());

console.log(d.getTimezoneOffset());

let z = d.toLocaleString('default' , {
    weekday : "long",
    dayPeriod: "long",
    // calendar : an_new_d,
    era : "long",
    localeMatcher: "best fit"
})

console.log(z);