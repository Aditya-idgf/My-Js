
let sayHi = ()=>{
    console.log('Hi Programmer.');
}
let setHi = setTimeout(sayHi, 3000); // this will delay the execution of sayHi function by 3000ms [3sec]

document.getElementById('stop').addEventListener('click',()=>{
    clearTimeout(setHi); // we can give clearTimeout to setTimeout to stop the countdown of setTimeout
    console.log('sayHi was stopped.');
})

// similar to setTimeout we have setInterval that does the action on repeat after a specific time
let loveHippos = (str)=>{
    console.log(str);
}
let setHippos;
document.getElementById('start').addEventListener('click' , ()=>{
    setHippos= setInterval(loveHippos , 2000 , "I love Hippos"); // this will run loveHippos function after every 2sec and pass the parameter "I love Hippos" to it.
    console.log(setHippos);
})
document.getElementById('stop').addEventListener('click',()=>{
    clearTimeout(setHippos); // we can give clearTimeout to setTimeout to stop the countdown of setTimeout
    console.log('setHippos was stopped.');
})
