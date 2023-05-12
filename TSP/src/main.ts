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

//number methods in ts 

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

//string methods in ts
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


