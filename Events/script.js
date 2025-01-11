document.getElementById('blue').onclick = () => { // this is also not a good practice
    alert("I am cyan");
} 

// Instead of all this we use eventlistners
document.getElementById('green').addEventListener('click',()=>{
    alert('I am green');
})

document.getElementById('green').addEventListener('click', (eventObj) =>{ 
    console.log(eventObj);  // these are called as event objects , contain info about the event, have various properties
})
// type, timestamp, defaultPrevented, target, toElement, srcElement, currentTarget, clientX,
// clientY, screenX, screenY, altkey, ctrlkey, shiftkey, keyCode

// propogation in eventlistenrs have false - bubbling - bottum up
                                // true - capturing - top down

// for eventlistenrs default value is false
//document.getElementById('contain').addEventListener('click', (e) => {
//    console.log('You clicked inside container');
// },false)
// document.getElementById('blue').addEventListener('click', (e) => {
//    console.log('You clicked on blue');
// },false)
// in this case the child elements event will be listend first than the parents on (bottom up)

//document.getElementById('contain').addEventListener('click', (e) => {
//    console.log('You clicked inside container');
//},true)
//document.getElementById('blue').addEventListener('click', (e) => {
//    console.log('You clicked on blue');
//},true)
// in this case first parent will be listend then the child (top down)

// we can also use e.stopPropagation(); so that our element cannot bubble up to parent element
// document.getElementById('contain').addEventListener('click', (e) => {
//     console.log('You clicked inside container');
// },false)
// document.getElementById('blue').addEventListener('click', (e) => {
//     console.log('You clicked on blue');
//     e.stopPropagation();
// },false)

// use preventDefault() to prevent element from doing its primary objective

// document.getElementById('green').addEventListener('click',(e)=>{
//     e.preventDefault();
//     e.stopPropagation();
//     console.log('Green to preventDefault.')
// })

document.getElementById('contain').addEventListener('click', (e)=>{
    console.log(e.target);
    console.log(e.target.tagName); // this returns the tag of target value
    console.log(e.target.parentNode); // this returns parent element of target
    console.log(e.target.parentNode.className); // this returns className of parent element of target
    if(e.target.parentNode.className === 'container'){
        let rmv = e.target;
        console.log(`${e.target.id} element has been removed.`);
        rmv.remove();
    }
})