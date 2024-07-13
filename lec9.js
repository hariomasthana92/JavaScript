 //primitive data types
 //7 types: string,number,boolean,null,undefined,symbol,BigInt;
 //non primitive or refrence
 // aray, objects** ,function;

 const score = 100
 const scorevalue = 100.3;

 const isloggedin = false
 const outsidetemp = null

 let useremail;

 const id = Symbol('23456')
 const anotherId = Symbol('23456')

 console.log(id === anotherId);//output false

 const BigNumber = 23456780987654n
 // n at the last represent BigInt data type;

 //arrays
 const heros = ["dfghj " ,"vbnm ","bnm"];
 let obj = {
    //inside the curly braces object is present
    name: "hitesh",
    age: 22,
 }
const myfunction = function()
{
    console.log("hello World");
}
console.log(typeof outsidetemp,typeof BigNumber,typeof heros ,typeof scorevalue,typeof score,typeof isloggedin ,typeof outsidetemp ,typeof anotherId);
console.log(myfunction())