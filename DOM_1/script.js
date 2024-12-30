let head = document.getElementById("heading").getAttribute('id'); //like this we access elements from the html
console.log(head);
document.getElementById("heading").setAttribute("class","Title"); // here we update attributes

// for updating CSS using JS we do as follows
let element = document.getElementById("para")
element.style.color = 'grey';
element.style.padding = "10px"; // every value is passed in "" 


// for updating text in html code we have 3 functions : 
let upcode = document.getElementById("heading")
console.log(upcode.innerHTML) // output : Heading of page <span style="display: none;">"text in span"</span>
                // this returns whatever code is in that html tag{all text and tag}
console.log(upcode.innerText) // output : Heading of page 
                // this will show text that is visible on the screen
console.log(upcode.textContent) // output : Heading of page "text in span"
                // this will return all the text inside the tag, same as innerHTML but without tags

// Query selector
console.log(document.querySelector('h2')) // returns the first query with the value passed
console.log(document.querySelector('#heading')) // here we passed it as we have query as we do in CSS
console.log(document.querySelector('p[id = "para"]')) // select element with that attribute

let tempvar = document.querySelector('ul')
console.log(tempvar.querySelector('li')) // this will get only the first element of the list
tempvar.querySelector('li').style.color = 'cyan'; // will update for first element of the list

let newVar = document.querySelectorAll('li') // this returns a value that is similar to array but not a complete array {called a NodeList}
// newVar.style.color = 'cyan'; // will not work since we can update for entire NodeList, only for individual element of that NodeList
newVar[2].style.color = 'pink'; // by providing index we can access indivial element from NodeList

// since NodeList is kind of array so we have some functions in it :
newVar.forEach((item) =>{
    item.style.backgroundColor = '#1B2452'
    item.style.padding = '10px'
})

// similar to how we access element with id we can access with class
let val = document.getElementsByClassName('list-item') // this value return {HTML Collection}
console.log(val) 

// since both these values are not arrays so to convert them into arrays we can do :
val = Array.from(val) // from methods converts it to array
console.log(val) 

val.forEach((item) =>{ // by converting them to arrays we can change values from HTML collection
    item.style.backgroundColor = '#F57C00'
    item.style.padding = '10px'
})