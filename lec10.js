 //stack (primitive) and heap(non primitive)//
//heap ke andar jo bhi jayega uska refrence milta hai && stack ke andar jo bhi jayrga uski copy milti hai//
// here we start new lec//
const name = "hariom"//declare an array
const repo = 568

// there are two ways two print them one is old and one is new 
//old way
console.log(name + repo + " value");
//new way
console.log(`hey my name is ${name} and my marks is ${repo}`);
//declare an array 2nd way
const gameName = new String('Hariomas')

//access the value of string
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
//find the index character

console.log(gameName.charAt('5'));
//just reverse of it i mean find char;

console.log(gameName.indexOf('i'));//O not o carefully;
//print a favourable character in a string;

const newString = gameName.substring(0,4)
console.log(newString);//last character does not print

// in slice we can give negative value also as it was ver similar to Ofindex;
const anotherString = gameName.slice(-8,4)//(-8) or 0 both are the same thing
console.log(anotherString);

//replace space from string
const one = "   asdfghj   "
console.log(one);
console.log(one.trim());

//whenever forget to write something in url then it helps to replace;
//mostly when ther is any space left then bydefault %20 is used there;
const url = "https://hariom.com/hariom%20choudhary"
console.log(url.replace('%20','-'))

//we can also find that there is anything there or not;
console.log(url.includes('hariom'))
console.log(url.includes('miakh'))

//we can split an array on any basis;
console.log(url.split('/'))
