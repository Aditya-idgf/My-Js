let generateColor = () =>{
    let hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0 ; i < 6 ; i++){
        color+= hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
let colorChange = null ;
document.getElementById('start').addEventListener('click',()=>{
    if(!colorChange){
        colorChange = setInterval(()=>{
            let body = document.querySelector('body');
            let newColor = generateColor();
            body.style.backgroundColor = newColor;
            console.log(`BGC changed to ${newColor}.`);
        },800);
    }
})
document.getElementById('stop').addEventListener('click',()=>{
    if(colorChange){
        clearInterval(colorChange);
        colorChange = null; 
        console.log('Color Changing stopped.');
    }
})