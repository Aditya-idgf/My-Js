let obj1 = {
    username : 'Adiiii',
    tureAccess : true,
    greetings : function greet(){
        console.log(`${this.username} has joined the server.`); // this keyword is used to access parameters for object in current context
        console.log(this);  // here obj1 is the object in current context
    }}

obj1.greetings()
obj1.username = 'Saimansays'
obj1.greetings() // by using obj1 object here we set our current context object to it 
// if we remove these lines then these lines then {this} will have a empty object to take as a current context 
console.log(this);

let addtwo = (n1 , n2) =>{
    return n1 + n2 // explicit return
}

let sum = (n1 , n2) => (n1 + n2)  // for functions with one line we can do {implicit return}