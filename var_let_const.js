
const id=1234
//cannot be cahnged throughout your code 

let nam="shiva"
//are valid only for the blocksccoped 
//means only runs for {} where they are created

var city="pune"
// are valid throughout the code 
//once declared can be acced every where in the code 


email="shivanandsatao@gmail.com"
//becames the glaobal object 

let time;
//every ndeclared valued is called as the undefined 

console.table([id,nam,city,email,time])


/*
JavaScript



1️⃣ Interpreted (not traditionally compiled)
Executed line-by-line by the JS engine (V8, SpiderMonkey, etc.)


2️⃣ Dynamically Typed Language
decides type at runtime, not at compile time.
js  
let x = 10;
x = "hello";   // valid

Java / C++
int x = 10;
x = "hello";  // ❌ error



3️⃣ Single-Threaded but Asynchronous 🧠

JavaScript

Single thread

Uses event loop

Non-blocking I/O


4️⃣ First-Class Functions ⭐

In JS, functions are values.
function greet() {}
let x = greet;
You can:
Pass functions as arguments
Return functions
Store functions in variables
👉 Not this flexible in many traditional languages.

5️⃣ Prototype-Based (not class-based originally)

JavaScript
Uses prototypes for inheritance
Java / C++
Class-based inheritance
obj.__proto__
👉 JS added class later, but internally it’s still prototype-based.


7️⃣ Weakly Typed (Type Coercion)
"5" + 2   // "52"
"5" - 2   // 3


Other languages

Strict type conversion

👉 Flexible but dangerous if not careful.


🔟 No Main Function

11.In JavaScript, characters are stored in UTF-16, so:

At least 16 bits (2 bytes) are used
*/