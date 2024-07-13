//dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// // let mycreateddate = new Date(2023 , 0 ,23, 5, 3)
// let mycreateddate = new Date("2023-01-14")//in the for of(dd mm yy)
// console.log(mycreateddate.toLocaleString());

let myTimestamp = Date.now()

console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate.getMonth())//many more