// function find_total(arrNum) {
//     let result = 0;

//     for (let i = 0; i < arrNum.length; i++) {
//         if (arrNum[i] === 0 || arrNum[i] % 2 === 0) {
//             result += 1; // Add 1 for even or 0
//         } else if (arrNum[i] === 5) {
//             result += 5; // Add 5 for 5
//         } else if (arrNum[i] % 2 === 1) {
//             result += 3; // Add 3 for odd
//         }
//     }

//     return result;
// }
// console.log(find_total([1, 2, 3, 4, 5]));
// console.log(find_total([17, 19, 21]));
// console.log(find_total([5, 5, 5]));
// console.log(find_total([2, 4, 6, 8, 10]));


//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Question 2 Valid palindrome<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************

// var isPalindrome = function(str) {
//     let str1= str.replace(/[^a-zA-Z0-9]/g , '').toLowerCase()
//     console.log(str1);
//     let str2 =str1.split("").reverse().join("") ;
   
//     if(str2==str1){
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
//   };
//     isPalindrome("A man, a plan, a canal: Panama")
// Note:If there is Number to check then just first convert the Number into String using toString() then use the remaining methods of the String done same as above.
//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question 3 takes two number and return their sum<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************

// function sumNumber(a,b){
// const sum = a+ b;
// return sum;
// }
// console.log(sumNumber(5,4));

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question 4 takes a string and return its length<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************


// function strLength(str){
//     if(typeof str !== 'string'){
//         console.log("Please provide string value only")
//     }
//     else{
//         const lengthofStr = str.length;
//         return console.log(lengthofStr);
//     }

// }
//  console.log(strLength("hello"));


// function lengthStr(str){
//     const length =str.length ;
//     return length;
// }
// console.log(lengthStr("hello World"));

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question 5 takes two numbers and return its sum,diff and product and division<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************
// function arithmetic(a,b){
//     const sum = a+b;
//     const diff = a-b;
//     const product = a*b;
//     const quotient = a%b;

//     console.log(sum,diff,product,quotient)
// }
// console.log(arithmetic(5,4));

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question 6 takes two numbers and return its sum,diff and product and division<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************


// function largest(a,b){
// if(a>b){
//     console.log(` a=${a} is the largest`);
//     return a;
// }
// else{
//     console.log(`b=${b} is the largest `)
// return b;
// }
// }
// console.log(largest(50,100))

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question 7 takes a string and reverse it<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************
// function rev(str){

// const reverseStr = str.split("").reverse().join("");
// return reverseStr

// }
// console.log(rev("hello world"));

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question 8 value check<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************
//  function check(num){
// if(num===0){
//   console.log("The num is Zero")

// }
// else if(num<0){
//     console.log("The num is negative")
// }
// else {
//     console.log("The num is positive")
// }

//  }
//  check(-10);


//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question 9 value check<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************

// function table(num){
//     for(let i=0; i<=10; i++){
// console.log(i*num)
//     }
// }
// table(20)

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question10 Sum till that number<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************
// function sum(num){
// let result =0;
//     for(let i=1; i<=num; i++){
// result+=i;
//     }
// return result;
// }
// console.log(sum(2))

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question11 No.of vowels in a string<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************

// function countVowels(str){
// let vowels =["a","e","i","o","u"]
// let count=0;

// for(let i=0; i<str.length; i++){
//     if(vowels.includes(str[i].toLowerCase())){
// count++;
//     }
// }
// return count;
// }

// console.log(countVowels("Hello world"))




//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question12 takes two array as args and returns an array of common elements in both arrays without duplicates sorted in ascending order.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************
// function findCommonElements(arr1,arr2){
//     let commonElements=[];
    
//   for(let i=0; i<arr1.length; i++){
//     if(arr2.includes(arr1[i])){
//         if(!commonElements.includes(arr1[i])){
//             commonElements.push(arr1[i]);
//         }
//     }
//   }  
// commonElements.sort((a,b)=>a-b)
// return commonElements;
// }
// const arr1=[7,1,2,3,4,5];
// const arr2=[3,4,5,6,7];
// console.log(findCommonElements(arr1,arr2));

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question13 takes name parameter and logs greeting.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************

// function greet(name){
// console.log(`Hello, Good morning ${name}`)
// }
// greet("Hitesh");

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question13 takes number parameter and logs squares of number.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************

// function square(num){
//     const sq =num*num;
//     console.log(`Square of Number is ${sq}`)
//     }
//     square(4);

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question13 takes string parameter and returns an object that contain count of each letter.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************

// function countLetter(str){
// let counts ={};
// for(let i=0;i<str.length;i++){
// const char =str[i];
// if(counts[char]){
//     counts[char]++ ;}
//     else{
//         counts[char]=1;
//     }
// }
// return counts;
// }
// console.log(countLetter("HellowebDevelopment"));

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question14 counter function that return function and that return a increment function.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************
// function createCounter(){
// let  count= 0;

// return function(){
// count++;
// return count ;
// }
// }

// const counter =createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question15 Sum of even numbers of a array.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************
// function sumEvenNumbers(arr){

//  let sum=0;
//  for(let i=0; i<arr.length ; i++){
//     if(arr[i]%2===0){
//         sum+=arr[i];
//     }
//  }
//  return sum;
// }
// const arr =[1,2,3,4,5,6,7,8,12]
// console.log(sumEvenNumbers(arr));
//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question16 length greater than 5 in array of a string.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************

// function filterStrings(arr){
// const newArr =[];
// for(let i=0; i<arr.length; i++){

//     if(arr[i].length>5){
//         newArr.push(arr[i]);
//     }
// }
// return newArr ;
// }

// console.log(filterStrings(['apple',"banana","kiwi","orange"]))

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question17 length greater than 5 in array of a string.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************

// function ObjKeys(obj){

//    const keys =Object.keys(obj);
//    return keys;
// }
// const person={
//     name:"drax",
//     age:20,
//     proffession:"engineer",
//     hobby:"football"
// }

// console.log(ObjKeys(person));

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question18 length greater than 5 in array of a string.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************
// function getValues(arr,propName){

//    const list =arr.map((obj,ind)=>obj[propName])
//    return list ;
//     }
//     const people=[
//         {name:"drax",age:20,proffession:"engineer",hobby:"football"},
//         {name:"drax OP",age:20,proffession:"player",hobby:"esports"},
//         {name:"draxler",age:20,proffession:"software",hobby:"trading"}
//     ]
    
//     console.log(getValues(people ,"name"));
//     console.log(getValues(people ,"ag"));
//     console.log(getValues(people ,"proffession"));

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question19 length greater than 5 in array of a string.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************
// function MaxProperty(arr,prop){
// if(arr.length ===0){
// console.log("Empty array")
// }

// let maxObj =arr[0];
// for(let i=0; i<arr.length;i++){

//     if(arr[i][prop]> maxObj[prop]){
// maxObj=arr[i];
//     }
// }
//     return maxObj;
    
// }
// const people=[
//             {name:"drax",age:20},
//             {name:"drax OP",age:25},
//             {name:"draxler",age:23}
//         ]
//    console.log(MaxProperty(people ,"age"));

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question19 Find the greatest number in the array.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************

// function greater(arr){
// let greatestNum =arr[0];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>greatestNum){
//         greatestNum =arr[i];
//     }
// }
// return greatestNum
// }
// const arr= [183,22,333,404,50,669,746,85] 
// console.log(greater(arr)) //same logic goes for smallest Number.

// Exercise -3 Dom manipulation and asynchronous and callbacks

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question19 function to change text of a button on ckick event.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************

// function chnageButtonText()
//     const button = document.querySelector("button");

//     if(button.textContent === "Click Me"){
//         button.textContent ="Clicked" ;
//         }
//         else{
//             button.textContent ="Click Me"
//         }
// }

// const button = document.querySelector("button");
// button.addEventListener("click",chnageButtonText)


// Exercise- 4 Asynchronous JS and Promise,callbacks and async,await

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question1 function to return a promise which resolves and reject after a specified number of ms.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************

// function delay(milisecond){
//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//              resolve(); // if this executed .then() will run.
//             reject(); //if this executed .catch() will run 
//         },milisecond)
//     })
// }
// console.log("start");
// delay().then(()=>{
//     console.log("2seconds delayed")
// }).catch((error)=>{
// console.log("error occured")
// })
// console.log("end");

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question 2 function to return a promise which resolves with an array of random numbers after specified number of ms.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************
// function getRandomNumber(length,ms){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         const newArray = Array.from({length},()=>Math.floor(Math.random()*100));
// resolve(newArray);
//         },ms)
//     })
// }
// getRandomNumber(5,2000).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
// console.error(error)
// })

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question 3 function that uses async/await to fetch Api data.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************
// async function fetchData(url){
// try {
//    const response = awaitfetch(url);
//    const data =(await response).json();
//    return new Promise((resolve)=>{
//     resolve(data)
//    });
// } catch (error) {
//     console.log(new error)
// }
// }
// fetchData("https://jsonplaceholder.typicode.com/posts/1")
// .then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });

//**********>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<************

fetch("https://jsonplaceholder.typicode.com/posts/2")
.then((res)=>{
return res.json();
})
.then((res)=>{
  console.log(res)
})
.catch((err)=>{
console.log(err)
});

// this method of declaring object is known as object literals.
// const obj ={
//   name:"Hitesh",
//   email:"hitesh09@gmail.com",
//   proffession:"Engineer",
//   "full name":"Hitesh Singh",
//   getData:function(){
//     console.log(`Hello  ${this.name}`)
//   }
// }
// console.log(obj["full name"])
// Object.freeze(obj)
// obj.getData()

//another method is to make single ton using new Object.


const objValue = new Object();
objValue.name = "Hitesh"
// console.log(objValue)

const obj1={1:"a",2:"b",}
const obj2={3:"c",4:"d",}
const obj3={5:"e",6:"f",}

// const objMain =Object.assign({},obj1,obj2,obj3)
// console.log(objMain)
// const objMain = {...obj1, ...obj2,}
// console.log(objMain)