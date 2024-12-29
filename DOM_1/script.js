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
