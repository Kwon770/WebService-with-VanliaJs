// alert("Im Working");
// console.log("Im Working");

// let : Declare changable variable
// const : Declare unchangable variable
// var : Declare changable variable [ old version variable type] [ Not recommended]
let a = 221;
let b = a - 5;
const c = 5;
var d = 10;
a = 4;

// Use const as variable type by default
// Dont use let if you don't have to change variable value
const bool = true;
const string = "This is string";
const integral = 100;
const float = 100.1;

// Array
const something = "something";
const array = ["Mon", "Tue", "Wed", true, 99, something];
console.log(array[2]);

// Objecct
const Object = {
  name: "Nico",
  age: 33,
  isHandsome: true,
  favMovies: ["batman", "Ironman"],
  favFood: [
    { name: "Kimchi", fatty: false },
    { name: "Burger", fatty: true }
  ]
};
console.log(Object.name); // "Nico"
Object.name = "Inkyung";
console.log(Object.name); // "Inkyung"

console.log(Object.favFood[0].name);

// Function
function SayHello(anyName, anyNumber) {
  console.log("Hello" + anyName + "and" + anyNumber);
  console.log(`Hello" ${anyName}  "and" ${anyNumber}`);
}

const greeting = SayHello("You", 15);
console.log(greeting);

const calculator = {
  puls: function(a, b) {
    return a + b;
  }
};
const plus = calculator.puls(5, 5);
console.log(plus);
