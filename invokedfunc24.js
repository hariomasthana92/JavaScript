// (IIFE) invoked function expressions
// whenever we  want to execute function imidiately then we use (iifi)
// function chai(){
//     console.log(`Db connected`);
// }
// chai()//not call like this


//****************important*************global scope ke polution se prevent krne ke liye uske variables ko hatane ke lie we use iifi*************************//


//syntax to execute it
//also called as named iifi
(function chai(){
    console.log(`Db connected`);
})();
//if use two iifi then use semi colon above to get prevent from errror

// (() => {
//     console.log(`from this we can also execute like this`)
// })()


//if we want to print name also then the syntax
//called as unnamed iifi
((name) => {
    console.log(`${name}from this we can also execute like this`)
})('hariom ')

 
 