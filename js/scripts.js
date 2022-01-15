const demand = "Give me a raise ";
const threat = "or you can take this job ";
const action = "and shove it!!!!!";
const tote = demand.concat(threat).concat(action);
console.log(tote);
const give = "gimmie";
console.log(give.toUpperCase());
const low = "THAT";
console.log(low.toLowerCase());
console.log(give.concat(" ").concat(low));
console.log(give + " "+ low);
console.log(give.charAt(3));
const test = (give.charAt(4) + " " + low);
console.log(test)
const nextTest = (give.charAt(1).toUpperCase()+ " " + low.charAt(2));
console.log(nextTest);
console.log(give.toUpperCase().concat(" ").concat(low));
console.log(nextTest.charAt(0));

//These are the console log outputs
// scripts .js: 5 Give me a raise or you can take this job and shove it!!!!!
// scripts.js:7 GIMMIE
// scripts.js:9 that
// scripts.js:10 gimmie THAT
// scripts.js:11 gimmie THAT
// scripts.js:12 m
// scripts.js:14 i THAT
// scripts.js:16 I A
// scripts.js:17 GIMMIE THAT
// scripts.js:18 I

let testNumber = 55;
testNumber += 5;
console.log(testNumber);
testNumber -= 50;
console.log(testNumber);
testNumber *= 12;
console.log(testNumber);
testNumber /= 6;
console.log(testNumber);
const myNumber = 5;
console.log(testNumber < myNumber);
console.log(myNumber === testNumber);
console.log(myNumber*4 === testNumber);
console.log(myNumber <= testNumber);

const greeting = "hello world";
console.log(greeting === "hello world");
let newNumber = 16;
console.log(newNumber === 16);
console.log(newNumber > 9);
console.log(newNumber < 13);
console.log(newNumber !== testNumber);

let sayHi = "hello there"
console.log(sayHi);
let fig = 42;
console.log (fig);
console.log(fig === sayHi);
fig = sayHi;
console.log(fig);
console.log(fig === sayHi);
num = 62;
fig = 8;
console.log (num + fig);
let inf= Infinity;
console.log(inf);
let gulp = 17;
console.log(gulp + inf);
console.log(inf.toFixed(17));
console.log(4.656424325.toFixed(4));

//console log output for lines 34-71

// scripts.js:36 10
// scripts.js:38 120
// scripts.js:40 20
// scripts.js:42 false
// scripts.js:43 false
// scripts.js:44 true
// scripts.js:45 true
// scripts.js:48 true
// scripts.js:50 true
// scripts.js:51 true
// scripts.js:52 false
// scripts.js:53 true
// scripts.js:56 hello there
// scripts.js:58 42
// scripts.js:59 false
// scripts.js:61 hello there
// scripts.js:62 true
// scripts.js:65 70
// scripts.js:67 Infinity
// scripts.js:69 Infinity
// scripts.js:70 Infinity
// scripts.js:71 4.6564



