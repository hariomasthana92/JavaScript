// const user = {
//     username: "hariom",
//     price:999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//     }
// }
// user.welcomeMessage()
// user.username = "sam"//changing the username
// user.welcomeMessage()

// console.log(this); // this refers to the empty object

// function hell(){
//     let username = "hariom"
//     console.log(this.username);//in functions we can not define (this) it gives undefined it works in object only
// }
// hell()

// const chai = () => { // this is how we can make an arrow function
//     let username = "hariom"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "hariom"
//     console.log(this.username);} // it also shows the undefined because username not known 


//how arrow function used
// //  const addtwo = (num1 , num2) => {
// //     return num1 + num2
// //  }
//  console.log(addtwo(3,4))

//  const addtwo = (num1 , num2) => num1 + num2 // we can write it as also we have to use return if we use curly braces othervise there is no need of return

//  console.log(addtwo(3,4))

 // reurning object in function

//  const addtwo = (num1 , num2) =>({username: "hariom"})

//  console.log(addtwo(3,4)) 
  
// const myArray = [2 , 3 , 4 , 5 , 67 , 7]
