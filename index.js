// q1

// function fruit(){
//     console.log(names);
//     console.log(price);
// }

// fruit();
// let price ='20';
// var names ='apple';

// q-2 using var in for loop

// for(var i=0; i<3;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },10)
// }
// var has global scope that has value 3 ,so it will print 3 three times  

// q-2 using let in for loop

//  for (let i =0; i<3 ; i++){
//     setTimeout(()=>{
//         console.log(i);
//     },100)
//  }

//  let has block scope thats why it prints 0,1,2

// q-4

// console.log(+true);
// console.log( typeof +true);

// console.log(!'anil');
// console.log( typeof (!'anil'));

// q-5

// let data ="size";

// const bird ={
//     size:'small',
// }
// console.log(bird[data]);
// console.log(bird['size']);  //we can pass the key of an object inside as [ data] or [''] manner.
// console.log(bird.size);
// console.log(bird.data);

// q-6 

// let c= {name: 'peter'}
// let d;

// d=c;
// c.name='spiderman';

// console.log(d.name);

//in the output the value of d will be changed and assigned equal to c because they both have same memory reference

// q-7 

// var x;
// var x=10;
// var x= 20;
// console.log(x);

//here the var can be redeclare so it has a value 10 as a output;

// var x ;
// let x= 10;
//  console.log(x);

//  here the let does not allow redeclaring variables so it will have an error;


// q-8 

// let a =3;
// let b = new Number(3);

//  console.log(a==b);  //the type of both are different but values are same so 1st case true and 2nd case false as new keyword creates a object.
//   console.log(a===b);
//   console.log(typeof b);
//   console.log(typeof a);

// q-9 

// let name ;
// let nmae ={}; 
// console.log(nmae)

// q-10 

// function fruit(){
//     console.log('woof ')
  
// }
// fruit.name ='apple'
// fruit();


//adding a additional property to function doesnt affect it so it will still print it .


// q-11 
// function sum(a,b,c,d){

//     return a + b + c +d
// }
// console.log(sum(1 + 2 +1  +"1")) //they just concat as + symbol is used for concatination.
// console.log(1 + 2 +1  +"1") //they just concat as + symbol is used for concatination.

// // q-12
// let number = 0;
// console.log(number++); //here we are first printing and then increasing value so it will print number;
// console.log(++number);//here we are first incrementing and then printing  the value and it has already inc so it will print 2. 
// console.log(number); //ans 2 just printing the number

// q-13 
// function getAge(...args){
//     console.log(typeof args)  //it returns array as result when console,log args but type of args is object so basically array is an object.
// }

// getAge(21,22)

// q-14
//  function getAge(){
//     // 'use strict';  
//  age=21 ;                  //it will be an error if  we use the use strict mode because it is not iitialiaze with let var and const;
//     console.log(age);
//  }
//  getAge();

// q-15
// const sum = eval(10*10+5); //eval just converts the string into numbers  ans 105.}
// console.log(sum);

// q-16

// const obj ={1:'a',2:'b',3:'c'};

// console.log(obj.hasOwnProperty('1'));
// console.log(obj.hasOwnProperty(1));

// q-17 
// const obj ={
//     a:'one',b:'two',a:'repeat'
// }
// console.log(obj);   //the value of a will be overwrite as it is reassigned another  value,so only two value will be shown; 

// q-18

// const one=()=>  console.log('first')
// const two =()=>  setTimeout(()=>{console.log('two'),100})
// const three =()=>  console.log('third')

// one();
// two();
// three();  //only the sequence of function calling matters

// q-19 

// difference between call and bind 

// to call a fucntion we just have to do this  function.call() ,but in case of bind we call  there again like function.bind(args.0)z();

// const person={name:'drax'}

// function sayHi(age){
//     return `${this.name} is ${age}`
// }
// console.log(sayHi.call(person,21));
// console.log(sayHi.bind(person,21)());
// sayHi(21);

// q-20

// console.log(typeof typeof 1); //the typeof 1 is  number and the type of number is string 

// q-21
// const numbers =[1,2,3]
// numbers[9]=11;
// console.log(numbers);


// function top(){
//     return 0;
// }
// console.log(typeof top); //everything in js is either primitive or object

// q-22
// console.log(!!null) false

// true

// console.log(!!"")false
// console.log(!!1)true

// q-23
// console.log(typeof 3 + 4+ '5')   //number45   and typeof Array is object.


// q-24
// function getInfo(member){
//     member.name='Anil';
// }
// const person= {name:'sarah'};

// getInfo(person);
// console.log(person);

// // q-25 
// (()=>{
//     let x=(y=10);
// })();                                //undefined beacuse let is block scope
// console.log(typeof x);



// q-26
// (()=>{
//     let x=y=10;
// })();                                //number bcoz here only x is declared not y so y has a global scope ;
// console.log(typeof y);

// q-27
// (()=>{
//     let x=10;
//    })();

// (()=>{
//     let x=10;
//     })();              //it will have no error as they both are  in different block;

// q-28
// (()=>{
//     let x=y=10;
//    })();

// (()=>{
//     let x=y=20;
//     })();              //y=20 as it has a global scope and it is redeclared in other block;
// console.log(y)

// q-29
// console.log(!true -true);        //(0*1 -1)=-1   value of true is 1 and false is 0;





//  String Questions 

// let str ="Hello,How are you"

// converting into array

// console.log(str.split());
// console.log(str.split(''));
// console.log(str.split(' '));
// console.log(str.split('a'));
// console.log(str.split('a'));


// console.log(str.replace("H","A"));
// console.log(str.replace(/H/g ,"A"));

//   const str1 = str.replace(/H/g,"A")
// console.log(str1);
// const str2 =str1.split('');
// console.log(str2);


//substring
//  let temp =str.substring(6,9) 
//  console.log(temp);

// console.log(str.substring(1,str.length));
// console.log(str.substring(0,str.length-1));


// let temp =str.split('o');
// console.log(temp[0]);

// reversing a string 

// const strng = "Draxler"
// const arr =strng.split('').reverse().join()
// console.log(arr);  
//string is reversed



// let calc =5*10/5*5
// console.log(calc)

// Creating a nested object

let person = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      zipCode: "12345"
    }
  };
  const{name,age}=person;
  console.log(name)
  const{street,city,zipCode}=person.address
  console.log(street,zipCode)


//   console.log(person.name); // Output: John
//   console.log(person.address.city); // Output: Anytown
  