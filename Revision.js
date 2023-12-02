//var let and const
// scope:it is a certain region where a variable can be recognised and beyond that it can't be recognised.

// 1.var can be redeclare in same scope.
// var a=10;
// console.log(a)
// var a=20;
// console.log(a)

//2.var and let can be declare without being initialize but const has to be initialize and declare.

// var x;
// let b;
// const c; //not possible has to initialize.

//3.Re-initialisation
// var a=10;
// a=5;
  
// let b=20;
// b=2;
// console.log(b);

// const c=30;
// c=3;
// console.log(c); //in const variable can't be reinitialized.


//javascript creation context;
// three phases
// 1.createa a global or window object;
// 2.setups a memory heap for variable and function storage.
// 3.Initialises them with undefined. 

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Map,filter,reduce are array methods  that are use to iterate over array to perform transformation or computation.
// 1.map():It is a method that is used to create a new array from existing one.

// const num=[1,2,3,4,5,6,7]

// const multiply = num.map(curElm=>2*curElm);
// console.log(multiply);

// 2.filter():It is method that returns only those values that fulfill some cases otherwise it will not return the elements.

//  const num=[1,2,3,4,5,6,7]

// const filtered =num.filter((curElm,ind)=>{
//     return curElm <5;
// })
// console.log(filtered)

// 3.reduce():It is a method which reduces the array values down to one value with the accumulator.
//  const num=[1,2,3,4,5,6,7]
//  const sum= num.reduce((acc,curElm)=>{
//     return acc +curElm;
//  },0)
// console.log(sum)

// 4.map vs forEach 
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

// Functions 

// function declaration :a simple which returns something. 
// function app(num){
// return num
// }

// function expression :when we store a function in a variable .

// const value = function (num){
//     return num
// }

// first class funtions : function which can be passed into another functions.
// function app(num){
//     return  num*num;
// }
// function square(fn){
// console.log("square of num is"+ fn(5))
// }
// square(app);

// IIFE -immediately invoked function expression.
// (function app(num){
//     console.log( num*10)
// })(5);


//spread and rest operator
// function multiply(...nums){
//     console.log(nums[0] * nums[1])
// }
// var arr=[5,6]
// multiply(...arr)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// callback function():It is a function passed into another function as an argument

//difference between arrow function and normal function.
// 1.syntax difference 2.arrow function can return in one line without return keyword
// 3.difference in behaviour of this keyword.
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// closures

// lexical scope: a variable defined outside a function can be accesible inside a function it is called lexical scope.but its opposite doesnot work.
// var userName="drax"
// function local(){
  //console.log(userName)
  //}
//local();//userName gets prints

// closure example:it used to have private variables.

//global scope
// var userName="drax"

// function makefun(){
//     var name="mozilla" //outer scope
//     function displayName(){
//         console.log(name,userName)  //local scope inside inner function,it will also has the access to the parent's parent scope
//     }
// return displayName;
// }
// var myFunc =makefun();
// myFunc();


// closures has three scopes : local,outer and global.

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//


// currying:Currying is defined as changing a function having multiple arguments into a sequence of functions with a single argument. It is a process of converting a function with more arity into a function having less arity.The term arity means the number of parameters in a function.

// function f(a){
//     return function(b){
//         return `${a} ${b}`
//     }
// }
// console.log(f(5)(6))//function having multiple arguments and in the params we are just making it single by returning the other argument in other function.

//why use currying ? 
//to avoid passing the same variable again and again,to make higher order functions,to make functions pure and less prone to error.

// example:curring in javascript.-sum(2)(6)(1)

// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(sum(2)(6)(1)); 


//if a function returns another functions then we have to pass the arguments in the above manner.function returns another function in currying making a sequence.

// example: 

// function evaluate(operation){
//     return function(a){
//         return function(b){
//            if(operation==='sum'){
//             return a+b;
//            }
//            if(operation==='multiply'){
//             return a*b;
//            }
//            if(operation==='divide'){
//             return a/b;
//            }
//            if(operation==="subtract"){
//             return a+b;
//            }
// else{
//   return  
// }
//         }
//     }
// }
// // console.log(evaluate("sum")(5)(6))
// const mul =evaluate("multiply")
// console.log(mul(4)(5)) 
// console.log(mul(4)(7)) 
// //we can create this so that we dont have to repeat again and again.

//infinite currying:In this we can pass any number of arguments for this the parameters have to accept n number of elments.

// question:add(5)(2)(4)(5)();

// function add(a){
//     return function(b){
//         if (b) return add(a+b);
//         return a;
//     }
// }
// console.log(add(5)(2)(4)(5)(8)());

// currying vs partial application

// function sum(a){
//     return function(b,c){
//         return a+b+c;
//     }
// }
// console.log(sum(20)(1,4)) this is partial application where we are passing three arguments and having only two functions.

//Real world implementation of currying :It is used to manipulate the DOM.


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// objects : An object is a collection of properties  and a property is an association between a name(key) and a value.

// const user={
//     name:"drax",
//     age:25,
//     "like this video":true,
// }
// user.name="Hitesh"  //to modify property.
// delete user.age;    //to delete property and delete keyword is only used to delete from objects not local variables.

// delete user["like this video"]
// console.log(user) ;

// looping through the object


// const user={
//     name:"drax",
//     age:25,
//     unemployed:true,
// }

// for (const key in user) {
//     console.log(key)
//     }


// const obj={
//     a:1,
//     b:2,
//     a:3,
// }
// //in objects if we define the key again later then the previous one will be replaced.
// console.log(obj)

// what is JSON.stringify and JSON.parse 

// const user={
//         name:"drax",
//         age:25,
//         unemployed:true,
//     }
//     const obj =JSON.stringify(user); // it converts objects into string.

//     console.log(obj) //so we can store it local storage it is easy to store in local storage as string.

//     console.log(JSON.parse(obj)) //it converts string into object.


// destructuring

// rest operators should be at last of the params whereas spread operator can be anywhere. 

// function getItems(fruitList,favoriteFruit,...args){ //rest operators
//     return [...fruitList,...args,favoriteFruit]; //spread operators
// }
//   console.log(getItems(["banana","apple"],"pear","orange")) 


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
//this Keyword 

// There are two types of object binding in javascript :
// 1 Implicite:when we invoke a function using dot(.)notation   2.Explicite

// this keyword targets its parent object :
// this.a=5 
// console.log(this)  //it target the global obejct ie the window object. It depends on the context in which it is defined.


// this.a=5;
// function getItems(){
//   console.log(this.a)
// }
// getItems();  //it again targets the window object. prints 5 in this case arrow function will also prints 5 but arrow functions takes the value from its outer normal function.

// let user={
//   name:"drax",
//   age:24,
//   getDetails(){
//   console.log(this.name)
//   }
// }
// user.getDetails();   //this keyword targets its immediate parent object only; here it is user.

// let users={
//     name:"drax",
//     age:24,
//     childObj:{
//       newName:"Hitesh",
//       getDetails(){
//         console.log(this.name ,"and", this.newName);
//       }
//     },
//   };
//   users.childObj.getDetails(); //here it will prints only its immediate parent value not the all parents. so it will print "Hitesh" and "undefined".
 
  //In case of arrow function it will not print the same as arrow function directly points to the window object.so if there is another function defined in this fucntion then it will print the same result.
  
  //call,bind,apply......

  //call is used when we have to associate a function to a obj explicitly so that we can use the this keyword .

  // var obj={name:"drax"}

  // function sayHello(age){ 
    
  //   return "Hello" + age + this.name;
  // }
  // console.log(sayHello.call(obj,24))


  // apply: It works same as the call method but it accepts the arguments in the form of arrays.
  
  // var obj={name:"drax"}

  // function sayHello(age,profession){ 
  //   return "Hello" + age + this.name +profession;
  // }
  // console.log(sayHello.apply(obj,[24,"engineer"]))

//bind:It provides us a another function that can be used to call the main function. 
//and if another function is not provided then it will return the whole funtion in the console.
  
//   var obj={name:"drax"}

//   function sayHello(age,profession){ 
//     return "Hello" + age + this.name +profession;
//   }
// const bindfunction = sayHello.bind(obj);
// console.log(bindfunction(24,"engineer"))

// var obj={
//   name:"messi",
//   age:35,
//   club:"Barcelona",

// }

// function football(country,position){
//   return "Hello"+ this.name +this.age + country + position;
// }

// const foot =football.bind(obj);
// console.log(foot("argentina","RWF"))
// console.log(foot("Brazil","LWF"))


// output questions

// const age=10; // this value is just for confusing .

// var person={
//   name:"piyush",
//   age:20,
//   getAge:function(){
//     return this.age;
//   }
// }

// var person2={age:24};
// console.log(person.getAge.call(person2))

 
//When we assigened a function with a object using the call method then the this keyword will not take the value from the parent object instead of this it will the value from the object we have just attached using the call method.}
//here the value of this.age will be 24 not 20.same thing apply using apply and bind.
//this keyword never points to a fucntion ,it always points to a object or global window or scope.
// We can't manipulate the working of arrow fucntion with call,bind and apply as it wil always target the window object.}


// var userName="Hitesh"
// const user={
//   name:"drax",
//   profession:"coder",
//   inner:function getData(){
//     console.log(userName)
//   }
// }
// user.inner()


// function add(arr){

//   for (let i = 0; i <arr.length; i++) {
//    arr[i]+=1
//   }
// return arr
// }
// let arr =[1,2,3,4,5]
// console.log(add(arr))



