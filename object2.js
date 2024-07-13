// //1st way to declare an object
// // declare an object and it is an singleton object formation
//  const tinderUser = new Object()
//  //2nd way to declare an object
//  // declare an object and it is an non singleton object formation
 const tinderUser = {}
 tinderUser.id="123ass"
 tinderUser.name = "Sammy"
 tinderUser.isLoggedIn = false

//  console.log(tinderUser);
//   const regularUser = {
//     email : "hvdvedchyvecyn.com",
//     fullname : {
//         first : "hariom",
//         last: "asthana",
//     }
//   }
//   console.log(regularUser.fullname);
//   console.log(regularUser.fullname.first);

  const obj1 ={1:"h", 2:"a"}
  const obj2 ={3:"r", 4:"i"}
  const obj3 ={5:"o", 6:"m"}
// const obj4 ={obj1 , obj2 ,obj3}//ye bas object ke andar object bna dega
// right way is written below but 2
// const obj4 = Object.assign({}, obj1 ,obj2 ,obj3)
// //here {} is target and rest obj's are source
//   console.log(obj4);
 const obj4 = {...obj1,...obj2,...obj3}//we use this syntax 90 % of the time because it is easy to write and understand
 console.log(obj4);

 const user = [
    {
        id : 1,
        email: "hariom@mm.com"
    },
    {
        id : 1,
        email: "hariom@mm.com"
    },
    {
        id : 1,
        email: "hariom@mm.com"
    },
    {
        id : 1,
        email: "hariom@mm.com"
    },
    {
        id : 1,
        email: "hariom@mm.com"
    },
 ]
 user[1].email
 // if you want to access the keys then
//console.log(tinderUser);
console.log(Object.keys(tinderUser));
// the output value holder data type is array
//it makes our work easy because in array traversing is easy
//we can also apply loops on it
//same as it is we can also access the values 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// we can easily ask that do you have this property or not
console.log(tinderUser.hasOwnProperty('isLoggedin'));

