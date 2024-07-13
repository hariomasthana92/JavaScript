// // array basics
// const myarr = [3,4,5,66,7]
// const myheroes= ["xcvbn" ,"rtyui","dfgh"]

const myarr1 = new Array(1,2,3,4,5,6,7,8,9)
// console.log(myarr1[0]);

// //array method

// // myarr1.push(6)
// // myarr1.push(6)
// // myarr1.push(6)
// // console.log(myarr1);
// // myarr1.pop(6)

// // shift the whole array and add something
// myarr1.unshift(456789)
// console.log(myarr1);
// //we do not use it as much as large scale
// //because here only 4 5 numbers so there is no issue
// // but sometimes the the numbers quantity is very large scale

// console.log(myarr1.includes(9));//ask is there is 9 is in arr;
// console.log(myarr1.indexOf(9));//get to know the index
  
// //convert numbers into string 
// console.log(typeof myarr1);
// const newarr = myarr.join();//data type changes after this
// console.log(typeof newarr);

// slice , splice
const myn1 = myarr1.slice(1,3)
console.log(myn1);
const myn2 = myarr1.splice(1,3)
console.log(myn2);
// in interviews ques is difference between them then
//the diif is just see output
//splice gives all but slice ye sach mei element nikaal leta hai array ke andar se aurarray badal jata hai
