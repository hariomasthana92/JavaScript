const marvel_heros = ["djebdhu","ejhdbe","eudghbed"]
const g = ["chjbdc","udghc","bh"]
// marvel_heros.push(g);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// here we can use concat also at the place of push
const allhero = marvel_heros.concat(g);
console.log(allhero);

// there is also a spread which use to spred all of them
const allaonewoherooo = [...marvel_heros, ...g]
//we get one one element
console.log(allaonewoherooo);
// if getting nested array then we can easily convert it into 1d
const bbb = [1,2,3,4,[2,5,6,7,[9,7,5],2,3],1,1,0,0]
const hh = bbb.flat(Infinity)
console.log(hh);// ho gaya maamu flat

//we can ask that is it array or string and can easily convert into array
console.log(Array.isArray("hariom"))
//use from to convert it into array
console.log(Array.from("hariom")) 

console.log(Array.from({name:"hariom"}))// intresting case for interviews
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));