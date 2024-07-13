// // function basic()
// // {
// //     console.log("har");
// //     console.log("har");
// //     console.log("har");
// //     console.log("mahadev");
// // }
// // basic();

// // function add2num(num1 , num2)
// // {
// //     let result = num1 + num2;
// //     return result;
// // }
// // function add2num(num1 , num2)
// // {
// //     console.log(num1 + num2);
// // }
// // add2num(2,"a");
// // add2num(2,"3");
// // add2num(2,null);
// // add2num(2,"34567890");

// // function add2num(num1 , num2)
// // {
// //     let result = num1 + num2;
// //     return result;
// //     //key point: result ke baad kuch bhi print nhi hoga
// //     console.log("hariom");
// // }
// // const result = add2num(2,3);
// // console.log("Result:", result);

// function loginuser(username){
//     return `${username} just logged in`
// }

// console.log(loginUser("hariom"))
// // console.log(loginUser());//when pass nothing then it is undefined
// console.log(loginUserMessage("hariom"));

//function 2
//  nested function with scopes
function one(){
    const username = "hariom"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    two()
}
one()

//try to understand the errors

if(true){
    const username = "hariom"
    if (username === "hariom"){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//****************intresting****************/
//if we normally use function then we can use it anywhere but if we take help of 
//expression then it is not valid it shows the error

addone(5)//eaxample
function addone(num){
    return num + 1
}

const addtwo = function(nums){//this is also a function initialisation known as expression
    return num + 2
}
addtwo(5)