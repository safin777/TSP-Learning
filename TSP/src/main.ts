import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)



let x : number = 5;
console.log(x);

//number methods in ts ==============================
 
let b : number = 1000.4353773333;
console.log(b); //1000.4353773333
console.log(b.toFixed(2)); //1000.44
console.log(b.toExponential(2)); //1.00e+3
console.log(b.toPrecision(2)); //1.0e+3
console.log(b.toLocaleString()); //1,000.435
console.log(b.toString()); //1000.4353773333
console.log(b.valueOf()); //1000.4353773333


//sting 

let str : string = "hello world";
let str2 : string = "Sayed";
let str3 : string = `hello ${str} ${str2}`;

console.log(str3);

//string methods in ts ==============================
console.log(str.charAt(0)); //h
console.log(str.charCodeAt(0)); //104 (ASCII value of h)
console.log(str.concat(" ", "world")); //hello world
console.log(str.indexOf("world")); //6
console.log(str.lastIndexOf("world")); //6
console.log(str.match(/o/g)); //["o", "o"]
console.log(str.replace("world", "earth")); //hello earth
console.log(str.search("world")); //6
console.log(str.slice(0, 5)); //hello
console.log(str.split(" ")); //["hello", "world"]
console.log(str.substr(0, 5)); //hello
console.log(str.substring(0, 5)); //hello
console.log(str.toLocaleLowerCase()); //hello world
console.log(str.toLocaleUpperCase()); //HELLO WORLD
console.log(str.concat(" ", str2)); //hello world Sayed
console.log(str.trim()); //hello world
console.log(str.endsWith('d')); //hello world end with d ,so its true 


//special type in ts ============================
let special_data : any = 5;
//special_data = "hello world";
//special_data = true;
console.log(special_data);

//type never
//never is a type that represents the absence of a value.
let tnever: never = true ; 

console.log(tnever);

//type null
//type undefined


//array in ts ============================

let names : string[] = ["Sayed", "Ali", "Hassan"];
let names2 : string[] = ["Faiza", "Sara", "Sana"];

let numbers : number[] = [1, 2, 3, 4, 5];

let n : string[]

//array methods in ts ============================
names.push("ismail"); //add ismail to the end of the array
names.pop(); //remove the last element from the array
names.shift(); //remove the first element from the array
names.unshift("ismail"); //add ismail to the beginning of the array
n = names.concat(names2); //concatenate two arrays

//filter method

let filterName : string[] =  n.filter((name)=>{
     if (name.endsWith('a')) {
         return name;
     }
})

console.log("filterd array:",filterName);

//map method

let mapName : string[] =  n.map((name)=>{
    return name.toUpperCase();
})

console.log("maped array:",mapName);


console.log("[Tuple] in ts ============================");

let infotuple : [string, number, string] = ["Sayed", 25, "Software Engineer"];
infotuple.push("ismail");
infotuple.push("Doctor");
infotuple.push("35");

console.log(infotuple);

//readonly tuple in ts ============================

let readonlytuple : readonly[string, number, string] = ["readonly", 25, "Software Engineer"];
//readonlytuple.push("ismail"); //error
//readonlytuple.push("Doctor"); //error
//readonlytuple.push("35"); //error

console.log(readonlytuple);


//object in ts ============================

const tsobject :  { type : string, name: string, age: number, isMarried: boolean } = {
    type : "active",
    name : "Sayed",
    age : 25,
    isMarried : false
    
}

console.log(tsobject);


//enum in ts ============================
console.log("[enum] in ts ============================");

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}

console.log(StatusCodes);

//use enum in switch case

enum Color {
  Red = 1,
  Green = 2,
  Blue = 4
}

let myColor: Color = Color.Green;

switch (myColor) {
  case Color.Red:
    console.log("The color is red");
    break;
  case Color.Green:
    console.log("The color is green");
    break;
  case Color.Blue:
    console.log("The color is blue");
    break;
  default:
    console.log("Unknown color");
}

//use enum in for loop

enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4
}

for (let colorName in Color2) {
  console.log(colorName);
}


//enum in string 
enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};

console.log(CardinalDirections);

//TypeScript Type Aliases and Interfaces ============================

console.log("[TypeScript Type Aliases and Interfaces] in ts ============================");


//type aliases
type longString  =  string;
type longNumber  =  number;
type longBoolean  =  boolean;

type Car = {
   name : longString,
   model : longString,
   year : longNumber,
   isUsed : longBoolean
  }

const car : Car = {
  name : "BMW",
  model : "X5",
  year : 2020,
  isUsed : false
}

console.log(car);




//interfaces

interface Rectangle {
  width: number;
  height: number;
}

const rec : Rectangle = {
  width : 10,
  height : 20
}

console.log(rec);


//extends interface

interface Square extends Rectangle {
  color : string;
}

const square : Square = {
  width : 10,
  height : 20,
  color : "red"
}

console.log(square);


//ts union type ============================

console.log("[ts union type] in ts ============================");

//when we want to use more than one type for a variable
//we can use union type

let unionType : string | number | boolean; //union type
//we can use any instead of union type

unionType = "hello world";
unionType = 5;
unionType = true;

console.log(unionType);


//ts functions 

console.log("[ts functions] in ts ============================");
//function declaration

function add(x: number, y:number){
  console.log(x + y);
}

add(5, 10);


//void function

function printHello(): void {
  console.log("Hello");
}
printHello();

//function with return type

function printHello2(): string {
  return "Hello string type return function ";
}
console.log(printHello2());


//function with optional parameter

function printHello3(a:number, b:number,c?:number): void {
  console.log(a + b + (c || 0));
}

printHello3(1, 2);

//default parameter

function pow(val:number,pow:number =3) {
    console.log(val ** pow);
}

pow(2,5); //32
pow(2); //8 as default pow is 3

//Named Parameters

function printName(firstName: string, lastName: string): void {
  console.log(`Hello ${firstName} ${lastName}`);
}

printName("Sayed", "Ali");
