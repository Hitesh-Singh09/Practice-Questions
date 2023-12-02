//#1 Fibonacci series

//n i<=n, Here n is the times we want to run the loop.Till how much it will print the sequence.
// function fibo(n){
// let n1 =0;  n2=1;
// let nextTerm;
//  for(let i =1; i<=n; i++){
//     nextTerm=n1 +n2;
//     n1=n2;
//     n2=nextTerm;
//     console.log(n1)
// }
// return  }
// fibo(8)
//Big-O =O(n)

// #2 factorial of a number
// function factorial(n){
// let result =1;
// for (let i=1; i<=n;i++){
// result = result *i ;
// }
// console.log(result);
// }
// factorial(6);
// Time complexity - Big-O = O(n);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//




// const obj ={
//     name:"Hitesh",
//     age:20,
// }

// const data ={
//     name:"Draxler",
//     age:24,
// }

// Object.prototype.hello = 'Say Hello';


// console.log(data.hello)


// var value = 'A';
// value =value.toLowerCase()


// if (value == 'a'||value =='e'||value =='i'||value =='o'||value =='u') {
//     console.log("It is vowel");
    
// } else {
//     console.log('It is a consonant');
// }
// const names = ["Brian", "Paul", "Krug", "Halley"];
// function App() {
//      const listItems = names.map((name) => {name});
//      return {listItems};
//     }
//     console.log(listItems)

// const prime =(n)=>{
//      for(let i=1; i<=n; i++){
//          if ((i%2==0)) {
//           console.log(i," divisible by TWO")
//          } 
//          else if(i%5==0){
// console.log(i," divisible by FIVE")
//          }
         
//          else {
//           console.log(i,"Not divisible by either 2,5,7,")
//          }
//      }
// }; 

// prime(10);



// callbacks
// const sum = (a, b, cb) => {
//     const result = a + b;
  
//     cb(result);
//   };
//   const resultFunc = (result) => {
//     console.log(result*10);
//   };
//   sum(5, 4, resultFunc);
  

//promises

// let promise = new Promise((resolve,reject)=>{
// resolve(data);

// reject(error)
// })

// promise.then(function(data){

// }).catch(function(error){

// })

// Exercise-3 Javascript 

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question19 function to change text of a button on click event.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************

// function changeButtonText(){
//     const button = document.querySelector("button");

//     if(button.textContent === "Click Me"){
//         button.textContent ="Clicked" ;
//         }
//         else{
//             button.textContent ="Click Me"
//         }
// }


// const button = document.querySelector("button");
// button.addEventListener("click",changeButtonText)


//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question19 function to change text of a button on ckick event.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************

// function changeButtonText(){
//     const button =document.querySelector("button")
//     if(button.textContent ==="Click Me"){
//         button.textContent ="Clicked"
//     }
//     else{
//         button.textContent ="Click Me"
//     }
// }
// const button =document.querySelector("button");
// button.addEventListener("click",changeButtonText);


//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question2 function to change text of a button on click event and create a new div.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************

// const parent =document.querySelector(".container");
// const newElm =document.createElement("div");
// newElm.textContent ="New Child Content";
// parent.appendChild(newElm);


//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question3  Function to add a css class to an element on the mouseIver event.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************

// function addClassMouseOver(elmId,className){

//    const element =document.getElementById(elmId);

//    element.addEventListener("mouseover",()=>{
//    element.classList.add(className);
//    })
//    element.addEventListener("mouseout",()=>{
// element.classList.remove(className);
//    })
// }
// addClassMouseOver("btn","item1");

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question3  Function to remove a css class to an element on the scroll event.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************

// function removeOnscroll(element,className){

// window.addEventListener("scroll",()=>{
//     if(element.classList.contains(className)){
// element.classList.remove(className)
//     }
// })
// }


// const item =document.querySelector(".box");
// removeOnscroll(item,"box1")

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question3  Write a function to toggle display of a div elm on Click event.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************


// function toggleDisplay(divID){

// const div= document.getElementById(divID)

// if(div.style.display ==="none"){
// div.style.display ="block";
// }
// else{
//     div.style.display ="none"
// }
// }

// const numbers =[1,2,3,22,5,77,89,98,100];


// function prime(input){
// if(input===1){
//     console.log("It is neither prime nor composite.")
// }
// else if(input<1){
//     console.log("It is not possible to determine.")
// }
// else{
//     for (let i = 2; i <input; i++) {
//         if(input%i==0){
// var result = ("It is a not prime number");
// break;
//         }
//         else{
// var result =("It is a prime Number")
//         }
//     }
//     console.log(result)
// }
// }
// prime(8)

