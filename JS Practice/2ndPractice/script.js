// Part 1: Variables and data types

// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment ( = assignment operator)

//code
let firstName = "Waqar"//string
let age1 = 21;//number
age1 = age1 + 1;
let student = true;//boolean

console.log(firstName);
console.log(age);
console.log(student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + "Years Old ";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

// Part 2: Arithmetic expressions

/* 
   arithmetic expression is a combination of...
   operands (values, variables, etc.)
   operators (+ - * / %)
   that can be evaluated to a value
   ex. y = x + 5;
*/

//code
let students = 20;

students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
let extraStudents = students % 2; //Remainder
students = students ** 2; // exponential (Power)

console.log(students);

// short method of the above
students += 1;
students -= 1;
students *= 2;
students /= 2;

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & subtraction
*/

let result = (1 + 2) * (3 + 4);

console.log(result);

// Part 3: User input

// How to accept user input

// EASY WAY with a window prompt
//code
let username1 = window.prompt("What's your Name ?");
console.log(username1);

// DIFFICULT WAY HTML textbox
// code
let username2;

document.getElementById("button").onclick = function(){
    username2 = document.getElementById("input").value;
    console.log(username2);
    document.getElementById("label").innerHTML = "Hello " + username2;
}

// Part 4: Type conversion

// type conversion = change the datatype of a value to another
//                                 (strings, numbers, booleans)
//code
let age = window.prompt("How old are you ?");

console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;

console.log("Happy Birthday! You are ", age , "years old");

let x1;
let y1;
let z1;

x1 = Number("3.14");
y1 = String(3.14);
// z = Boolean(); //false
z1 = Boolean("waqar"); // true (anything)

console.log(x1, typeof x1);
console.log(y1, typeof y1);
console.log(z1, typeof z1);

// Part 5: Const 

// const = a variable that can't be changed
//code
const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

//PI = 420.69;

circumference = 2 * PI * radius;

console.log("The circumference is:", circumference);

//Part 6: Maths


// Math =  an intrinsic object that provides basic mathematics functionality and constants
//code
let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;

x = Math.round(x);
x = Math.floor(x);
x = Math.ceil(x);
x = Math.pow(x, 2);
x = Math.sqrt(x);
x = Math.abs(x);
maximum = Math.max(x, y, z);
minimum = Math.min(x, y, z);
x = Math.PI;

console.log(x);