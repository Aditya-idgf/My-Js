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
console.log(new_ret); // output : GodZigga has joined the server.

let user_vals = {
    userNames : "Aditya",
    userAmount : 199
}

let user_details = (AnyObject) => {
    console.log(`Username is ${AnyObject.userNames} & Useramount is ${AnyObject.userAmount}.`); 
    console.log(`Username is ${AnyObject.userName} & Useramount is ${AnyObject.userAmount}.`);  // here property name : AnyObject.userName is wrong
        // while passing a object in function if property names are not correctly given then it we set that value as undefined 
}
user_details(user_vals)
user_details({ // like this we can directly create a new object in function call 
    userNames : "Zippy",
    userAmount : 999 
})

let changeName = (obj) => {
    obj.name = "Rahul" // if u change the passed in object , 
                // then the real object gets changed as well{happens the same of arrays}
    return obj
}
let obj1 = {
    name : "Aditya",
    runing : 1902
}
let obj2 = changeName(obj1)
console.log(obj1);
console.log(obj2);