// in javascript we use === instead of  == during if else conditions 
// as first two  ==  are for same identity the third is for should be same data type

//example
// if (2 == "2")
// {
//     console.log("executed");
// }
// output is (executed) because  there is only  two equal sign

//now
// if (2 === "2")
// {
//     console.log("executed");
// }/

// rest conditions are same as like in other languages

//use let instead of var in code

//example
// console.log(`User power: ${power}`); if we execute it shows error because 
//power is not defined globally

// const score = 200

// if (score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }



//if we use var instead of let then it does not show error thats why use let always;
// const score = 200

// if (score > 100){
//     var power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// we can also use condition like this
 
// const balance = 500

// // if (balance < 600) console.log("test");
// also add many console in it using comma but it is not preferable

//use of if else in daily life

// example

// const userLoggedIn = true
// const debitCard = true

// if(userLoggedIn && debitCard){
//     console.log("Allow to buy course");
// }


//syntax of switch statement
// switch (key){
//     case value:
//         console.log("anything");
//         break;
//     default:
//         break;
// }

// const month = 9

// switch (month) {
//     case 3:
//         console.log("january");
//         break;
//     case 4:
//         console.log("feb");
//         break;
//     case 5:
//         console.log("mar");
//         break;
//     case 6:
//         console.log("june");
//         break;
//     case 7:
//         console.log("july");
//         break;
//     case 8:
//         console.log("aug");
//         break;
//     case 9:
//         console.log("sep");
//         break;
    
//     default:
//         break;
// }

//falsy value
//false ,   0, -0, BigInt 0n, "", null , undefined, NaN

// rest falsy value all of them are truthy values
//truthy values
//"0" ,'false' , " " , [] ,{} , function(){}

// check array or object is empty or full

// if(UserActivation.email.length === 0)
// {
//     console.log("array is empty");;
// }

//object
// const emptyobj = {}

// if(Object.keys(emptyobj).length === 0){
//     console.log("object is empty");
// }


 //nullish coalescing operator (??): null undefined
//it is type of fall back used when sometimes the value become undefined then to protect
// the whole code from stucking up then this is used
//  let val1;
// //  val1 = 5 ?? 10
// // val1 = null ?? 10
// // val1 = undefined ?? 10
// val1 = null ?? 10 ?? 20
//  console.log(val1);

// we can also use ernary operator
// //condition ? true : false
// const icetea = 100
// icetea >= 80 ? console.log("less 80") : console.log("more 80")

//for loops are same as it other [for] loops only we use let instead of int char and any other data types

 //in javascript as we know that we use length instead of size() for finding out the size of an array
 //while loop is same as like the other while loop

 //(for of) loops

 // example 
//  const arr = [1,2,3,4,5]

//  for(const num1 of arr){
//     console.log(num1);
//  }

// const greetings = "helloworld!"
// for(const greet of greetings){
//     // console.log(greet);
//     console.log(`each char is ${greet}`);
// }

//maps->it gives the unique values means if there something which is repeated then it shows only on time

//initialisation of map

// const map = new Map()
// map.set('IN', "INDIA")
// map.set('fr', "france")
// map.set('USA', "united states")

// console.log(map);
// console.log(Map);//shows type of
//we cannot itterate map using forin loop
//use for of loop in map
// for(const [key, value] of map)
// {
//      console.log([key] ,':-' ,[value]);
// }

// use for of loop in object 
//use
// const myObject = {
//     'game1' : "pubg",
//     'game2' : "pubg1",
//     'game3' : "pubg2"
// }
//object are not iterable by this method
// for(const [key, value] of muObject)
// {
//     console.log([key] ,':-' ,[value]);
// }

// const myObject = {
//     js: 'javascript',
//     cpp:'c++',
//     rb:'ruby'
// }
// //for itterating the object we itterate through using forin loop
// for(const key in myObject)
// {
//     console.log(`${key} shortcut is ${myObject[key]}`);
// }

//for each function example it use for call back a function
// const coding = ["dfghj","dfghj","dfghj"]

// coding.forEach(function (val1){//in callback function we don't give them name thats why there is no name
//     console.log(val1)
// })
 
//using arrow function
// coding.forEach( (item)=>{
//     console.log(item);
// } ) 


// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
// } ) 


// function print(item){
//     console.log(item);
// }

// coding.forEach(print)


//*************filter maps concept************ */
//in this there is a condition which always applied toexecute the programme

// const nums = [1,2,3,,5,6,7,89,9]

// const newnums = nums.filter((num) => num > 4)
// console.log(newnums); 

//the right way to implement this is

 const nums = [1,2,3,,5,6,7,89,9]

// const newnums = nums.filter((num) => {
//     // here if we use curly braces then we should use return here
//     return num > 4;
// })
// console.log(newnums);

//use filter in foreach loop
//  const newnums = []

//  nums.forEach( (num) => {
//     if(num > 4)
//     {
//         newnums.push(num)
//     }
//  })
//  console.log(newnums);

//example 
const books = [
    {tittle : 'book 1', genre: 'science', publish: 1981, edition : 1981},
    {tittle : 'book 2', genre: 'history', publish: 1981, edition : 1981},
    {tittle : 'book 3', genre: 'fiction', publish: 1981, edition : 2002},
    {tittle : 'book ', genre: 'kamasutra', publish: 1981, edition : 2022}, 
    {tittle : 'book 1', genre: 'fiction', publish: 1981, edition : 2024},
    {tittle : 'book 1', genre: 'civics', publish: 1981, edition : 2021},
    {tittle : 'book 1', genre: 'history', publish: 1981, edition : 2009},
];
const userbooks = books.filter((i)=> i.genre==='history')

const userbooks = books.filter((i)=> 
{
    return i.publish>=1995 && i.genre === "history"
})
console.log(userbooks);