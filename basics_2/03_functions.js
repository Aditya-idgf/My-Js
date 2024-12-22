// functions are created in 3 ways :
function f1(){
    console.log("Hello world 1");
}
f1()

let f2 = function(){
    console.log("Hello world 2");
}
f2()

let f3 = () =>{
    console.log("Hello world 3");
}
f3()

// Passing args :
function Sum(n1 , n2){
    console.log(n1 + n2);
}
let s = Sum(10 , 20)
console.log(s); // since function aint returning anything then this says undefined

// returns values
function userLogInMessage (userName = 'GodZigga') { // here 'GodZigga' is a default value that means if undef is passed in the function then we can have a defualt instead of undef
    if (userName === undefined) {
        console.log(`Invalid user name.`);
        return
    }
    return `${userName} has joined the server.`;
}
userLogInMessage('KingCruly') // this does anything cuz the returned value isnt being stored anywhere 
let ret_val = userLogInMessage('KingCruly') // here we get this return value  
console.log(ret_val);

let new_ret = userLogInMessage() // in this case as nothing is being passed to the function it will just get undefined value 
console.log(new_ret); // output : {x}