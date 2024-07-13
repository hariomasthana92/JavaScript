const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1)); // used for decimal after number till how much you needed numbers

const otherNumber = 23.678
console.log(otherNumber);

console.log(otherNumber.toPrecision(2))// gives precision value of a number
//for making a string US method
const humdered = 10000000000
// console.log(humdered.toLocaleString('en-IN'));

// maths******************************
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6));

// console.log(Math.random());
// console.log(Math.random()*10 + 1);

const max = 10;
const min = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min)