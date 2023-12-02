//  1. Palindrome Number

// var isPalindrome = function (val) {
//   return val < 0 ? false : val === +val.toString().split("").reverse().join("");
// };

// const res = isPalindrome(121);
// console.log(res);


//  2.Fibonacci Number
// var fib =function(n){
//     const arr=[0,1];
    
//     for(let i=2; i<=n; i++){
//     arr.push(arr[i-1]+arr[i-2]);
//     }
//     return arr[n];
//     }
    
//     console.log(fib(5));
    
// 3.valid Anagram 
//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase ,using all the  originals letter exactly once.
// example: "anagram" ---> "nagaram" output: True
// example: "rat"--------->"cat"    output: false 

// const isAnagram =function(s,t){
// s =s.split("").sort().join("");
// t =t.split("").sort().join("");
// return s===t
// }
// console.log(isAnagram("Hello","Hello"))

// 4.Two Sum
//Given an array of integers nums and an integer target.
//return integer of the two numbers asuch that they add upto the target.
// input :[2,7,11,15] target= 9;
// output :[0,1] because 2 +7 =9 ;

// const twoSum = function(nums,target){
// for (let i = 0; i<nums.length; i++) {
//    for (let j = i+1; j < nums.length; j++) {
//     if(nums[i]+nums[j] === target)
//     return [i,j]
    
//    }
// }
// }
// console.log(twoSum([2,7,4,11,15,300,50,7],351))

// another approach
// const twoSum =function(nums,target){
// var obj={}
// for (let i = 0; i < nums.length; i++) {
//     var n =nums[i]

//     if(obj[target-n] >=0){
// return[obj[target - n],i];
//     }
//     else{
// obj[n]=i ;
//     }
// }

// }
// console.log(twoSum([2,7,11,15],9))