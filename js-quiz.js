// 1. Try to name all eight Javascript types

Number, Boolean, String, Date, undefined, int, null, 
number, string, Boolean, null, undefined, Symbol, BigInt, Object //richtige Antworten
/*  const obj = { a:1, b:2 }
 const array = [1,2,3]
 const functiona =()=>{}
 new File() */

// 2. Which of these statements are true
0 == "0"; --t //t
0 === "0"; --f //f
null == undefined; --t // t
false == "false"; --t // f --> convert to string
// [] == ""; --f // t --> impliced typecasting // number/boolean/null>string>object 
"" == false; --t  //t  
NaN == NaN; --t //f  // if (dangerMathOperation() == NaN) --> false // if (Number.isNaN(dangerMathOperation())) {} // fehler == fehler
({ a: 1 } == { a: 1 }); --f //f  (RAM Zuordnung)
({} === {}); --t
0.1 + 0.2 == 0.3; --t // f --> Rundungsfehler  // wird in decimal umgerechnet 
0.2 + 0.2 == 0.4; --t // t --> 2er Potenzen funktionieren
typeof [] == "array"; --f // f // Array.isArray([]) --t
typeof {} == "object"; --f // t
typeof console.log == "function"; --f //t
typeof typeof 0 == "number"; --t //f //typeOf wandelt in String um

// 3. Fill in the blank
["a", "b", "c", "d", "e", "f"].slice(/*1 3 4*/); // [c', 'd', 'e'] // .slice(2,5) //.slice(-1, -4)
[1, 2, 3].map(/*x => x*2*/); // [2, 4, 6] // korrekt
["Apfel", "Birne", "Aprikose", "Karotte", "Ananas"].filter(/*'a*'*/); // ['Apfel', 'Aprikose', 'Ananans'] // .filter(str => str.startWith('A')) --> keysensitiv // str.toLoverCase.startWith("a")
["a", "b", "c", "d", "e"].sort(/***/); // ['e', 'd', 'c', 'b', 'a'] --> .reverse()? // .sort(a,b) => if (a<b) else ... // b.localeCompare(a) // return -a.localeCompare(b)
["A", "B", "B", "A"].reduce(/***/); // 'A-B-B-A' // .reduce((result, next) =>  return result + "-"}, []);

// 4. Name an example of a constructor function that's built into Javascript

function B() {};
const b = new B()

new Date();
new HashMap();
new Array();
new String();

// -JS create a new Object
// -set .prototype of this objection to the constructor functions .prototype
//  - calls the constructor function with the new objects

function MyConstructor(a) {
    this.a = a;
};

MyConstructor.prototype.myMethod = function() {};

const myInstance = new MyConstructor("Hello");
myInstance.a;
myInstance.myMethod();

// 5. What's the difference between an arrow function and a traditional function expression?

const obj = {
    name: "Gabi",
    method: function () {
        console.log("Hello, my name" + this.name);
    }
    
} // trad zeitpunkt der verarbeitung (methode) // an aktuellen objekt gebunden


const obj2 = {
    name: "Gabi2",
    method: () => {
        console.log("Hello, my name" + this.name);
    }
} // this nicht zum Zeitpunkt der verarbeitung sondern, wenn die constructor aufgerufen wird // global verwendbar

// 6. What's the difference between these two functions A and B? 

async function A() {
  return "Hello";
}

function B() {
  return new Promise((resolve) => resolve("Hello"));
}

// 7. Which of these attributes/features are a part of Javascript (in its current widely used implementations)

/*
- Statically Typed
- Single Threaded
- Purely Functional
- Event-Based Concurrency
- Just in Time Compiled
- Ahead of Time Compiled
- Parallelisable
- Non Blocking I/O
- Imperative
- Object-oriented
- Multiple-inheritance
- Dynamic Scoping
- Lexical Scoping
- First Class Modules
- Garbage Collected
- Memory Safe
- Thread Safe
- Implicit Type Coercion
- Operator Overloading
- Dynamic
- Functional
*/

// 8. Use the fetch API to download a random joke from https://official-joke-api.appspot.com/random_joke
// Hint: paste the snippet into the console of your browser instead of node

// 9. How could you import all four functions

// math.js
const add = (a, b) => a + b

export { add };
export function mul(a, b) { return a * b; }
export const sub = (a, b) => a - b;
export default function div(a, b) { return a / b; }

// index.js
// import ??? from './math'