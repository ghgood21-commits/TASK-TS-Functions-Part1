let example: boolean = true;
let anotherExample: boolean = false;
console.log(true);
console.log(false);
console.log(5 > 3); // true
console.log(5 === 3); // false
if (CONDITION) {
    CODE;
  }
  const x: number = 5;
const y: number = 3;

if (x > y) {
  console.log("X is bigger than Y");
}
const x: number = 5;
const y: number = 3;

if (x > y) {
  console.log("X is bigger than Y");
  console.log("Y is smaller than X");
}
const age: number = 25;

if (age > 18 && age < 60) console.log("You're elligible!");
const username: string = "Mshary";
const age: number = 25;

if (age > 18 && name !== "Mshary") console.log("You're elligible!");

const username: string = "Laila";
const age: number = 25;

if (age > 18 || name !== "Mshary") console.log("You're elligible!");

console.log(7 % 2); // 1
console.log(8 % 2); // 0

const number: number = 5;

if (number % 2 === 0) console.log("EVEN");
else console.log("ODD");

if ("hello") {
    console.log("Truthy!"); // ✅ This runs
  }
  
  if (0) {
    console.log("Falsy!"); // ❌ This won't run
  }

  let age: number = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote);  // Outputs: "Yes"

type CanVoteType = "Yes" | "No"; // Restrict the variable to only "Yes" or "No"

let age: number = 18;
let canVote: CanVoteType = age >= 18 ? "Yes" : "No"; // Ensures only valid values are assigned

// 🔴 If we remove all type annotations and change 'age' to a string, 
//    we'll get an error: "Operator '>=' cannot be applied to types 'string' and 'number'."

// ⚠️ If we remove the type from 'canVote', its inferred type will be 'string', 
//    meaning we could mistakenly assign or reassign a value like "Maybe" without TypeScript catching it. 

// ✅ By using 'CanVoteType', we restrict 'canVote' to only "Yes" or "No", 
//    preventing accidental errors and ensuring logical correctness.con