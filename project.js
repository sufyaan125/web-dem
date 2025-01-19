document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const reason = document.getElementById('reason').value;

    const confirmationMessage = `
        Appointment successfully booked!<br>
        Name: ${name}<br>
        Email: ${email}<br>
        Date: ${date}<br>
        Time: ${time}<br>
        Reason: ${reason}
    `;

    document.getElementById('confirmationMessage').innerHTML = confirmationMessage;

   
    document.getElementById('appointmentForm').reset();
});


//chapterska js kooda
//chaper1
function suufka() {
    // Target the div where you want the message
    document.getElementById('messageContainer').innerHTML = 'hello world';
}

/// example 1
function axmed(){
let a = 5;
let b = 10;
a = a + b;
b = a - b;
a = a - b;
document.getElementById("result1").innerHTML = "After swapping: a = " + a + ", b = " + b;
}

// example 2
function samia(){
let age = 20;
let message = age > 18 ? "adult" : "junior";
document.getElementById("result2").innerHTML = message;
}

// example 3
function pray(){
let a = 4;
let b = 5;
let result = a + b;
document.getElementById("result3").innerHTML = "Result: " + result;
}

// example 4
function mobile(){
let equal = 2 === 3;
document.getElementById("result4").innerHTML = "Equal result: " + equal;
}

// example 5
function design(){
let isTrue = true || false;
document.getElementById("result5").innerHTML = "Is true: " + isTrue;
}


//chpter2

// example 1
function buug(){
let a = 5;
let x = 60;
let buug = a;
a = x;
x = buug;

document.getElementById("result1").innerHTML = "Markii lisku badalo: a = " + a + " , x = " + x;
}

// example 2
function mosque(){
let age = 18;

let message = (age >= 18) ? "You are an adult." : "You are a minor.";
document.getElementById("result2").innerHTML = message;
}

// example 3
function woman(){
let grade = 85;

let gradeMessage;
if (grade >= 90) {
gradeMessage = "A";
} else if (grade >= 80) {
gradeMessage = "B";
} else {
gradeMessage = "C";
}
document.getElementById("result3").innerHTML = "Grade: " + gradeMessage;
}

// example 4
function men(){
let day = "Saturday";

let message;
switch (day) {
case "Saturday":
    message = "Waa bilowga isbuuca";
    break;
case "Wednesday":
    message = "It's almost the weekend!";
    break;
default:
    message = "It's a regular day.";
}
document.getElementById("result4").innerHTML = message;
}

// example 5
function $(){
let result = "";
for (let i = 1; i <= 5; i++) {
result += i + "<br>";
}
document.getElementById("result5").innerHTML = result;
}




// example 1
function user() {
document.getElementById("result1").innerHTML = "Hello, world!";
}

// example 2
function block() {
if (true) {
let blockVariable = "I'm in block scope";
document.getElementById("result2").innerHTML = blockVariable; // Accessible within the block
}
}

// example 3
function sayHello() {
var localVariable = "I'm in local scope";
document.getElementById("result3").innerHTML = localVariable;
}

// example 4
function comp() {
const doublenumber = (number) => {
return number * 2;
}
document.getElementById("result4").innerHTML = "Double of 3 is: " + doublenumber(3);
}

// example 5
function dosomething(callback) {
document.getElementById("result5").innerHTML = "doing something..";
callback();
}

function oncomplete() {
console.log("operation complete!");
document.getElementById("result5").innerHTML += "<br>operation complete!";
dosomething(oncomplete);
}


/// Example 1
function daahir() {
const names = ["ahmed", "mohamed", "ali"];
document.getElementById("result1").innerHTML = "Names: " + names.join(", ");
}

// Example 2
function teeth() {
const fruits = ["apple", "banana", "mango"];
const removedfruit = fruits.pop();
document.getElementById("result2").innerHTML = "Removed fruit: " + removedfruit + "<br>Remaining fruits: " + fruits.join(", ");
}

// Example 3
function tooth() {
const fruits = ["apple", "banana", "mango"];
let result = fruits.map(fruit => fruit);
document.getElementById("result3").innerHTML = "Fruits: " + result.join(", ");
}

// Example 4
function chest() {
const fruits = ["apple", "banana", "mango"];
let result = "";
fruits.forEach(function(fruit) {
result += fruit + "<br>";
});
document.getElementById("result4").innerHTML = "Fruits: <br>" + result;
}

// Example 5
function melon() {
const numbers = [1, 2, 3];
const squarednumbers = numbers.map((num) => num * num);
document.getElementById("result5").innerHTML = "Squared Numbers: " + squarednumbers.join(", ");
}

// Example 6
function shirt() {
const matrix = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];
let result = "";
for (let row = 0; row < matrix.length; row++) {
for (let col = 0; col < matrix[row].length; col++) {
    result += matrix[row][col] + " ";
}
result += "<br>";
}
document.getElementById("result6").innerHTML = "Matrix:<br>" + result;
}

// Example 7
function yul() {
const myarray = Array.of(1, 2, 3);
document.getElementById("result7").innerHTML = "Array: " + myarray.join(", ");
}

// Example 8
function chair() {
const person = {
firstname: "Mohamed",
lastname: "Ali",
getfullname: function() {
    return this.firstname + " " + this.lastname;
},
};
document.getElementById("result8").innerHTML = "Full name: " + person.getfullname();
}

// Example 9
function nickname() {
const fai = {
firstName: "Mohamed",
lastName: "Ali",
getFullName: function() {
    return this.firstName + " " + this.lastName;
},
};
document.getElementById("result9").innerHTML = "Full name: " + fai.getFullName();
}

// Example 10
function test() {
const testObj = {
"name": "Jonson",
"city": "New York",
"age": 30
};
document.getElementById("result10").innerHTML = "Test Object: " + JSON.stringify(testObj);
}

// Example 11
function age() {
const wew = {
"name": "Mohamed",
"age": 30,
"hobbies": ["reciting Quran", "praying", "reading", "swimming"]
};
document.getElementById("result11").innerHTML = "Age Object: " + JSON.stringify(wew);
}

// Example 12
function jsonstring() {
const jsonString = '{"name": "Mohammed Ali", "age": 30}';
const jsonObject = JSON.parse(jsonString);
document.getElementById("result12").innerHTML = "JSON Object: " + jsonObject.name;
}

// Example 13
function person() {
const person = { name: "Mohammed Ali", age: 30 };
const jsonString = JSON.stringify(person);
document.getElementById("result13").innerHTML = "JSON String: " + jsonString;
}


// /  chpt6

 let contentel = document.getElementById("continant");
 contentel.style.background = "blue";
 contentel.style.color = "white";
 contentel.style.padding = "10px";
 contentel.style.fontFamily = "serif";
 
 //example 3
 let boxElement1 = document.getElementsByClassName("backContent");
 for (let i = 0; i < boxElement.length; i++){
     boxElement[i].style.border = "3px dashed"
 }
 
 let par = document.getElementsByClassName("p");
 for (let i = 0; i < par.length; i++){
     par[i].style.fontStyle = "italic";
     par[i].style.margin = "20px";
 }
 
 
 let elemrnt = document.getElementById("mylink");
 elemrnt.style.textDecoration = "none";
 
 //examp 7
 let pra = document.getElementById("paragraph");
 pra.innerText = "Setting p tag text using innertext property";
 pra.textContent = "Setting p tag text using textcontent property";
 
 //examp 8
 let link = document.getElementById("my_link");
 link.setAttribute("class", "remove_txt_deco")
 
 let set = document.getElementsByClassName("remove_txt_deco");
 for (let i = 0; i < set.length; i++){
     set[i].style.textDecoration = "none";
 }
 
 //examp 9
 let create_element = document.createElement("p");
 let parg = document.getElementById("pargr")
 create_element.innerText = "This is creted element";
 parg.appendChild(create_element);
 
 // exam 10
 let olde_element = document.getElementById("pragraph");
 let new_element = document.createElement("p");
 new_element.innerText = "This is the new pragraph element";
 document.body.replaceChild(new_element, olde_element)
 
 //exam 11
 let parentElement = document.getElementById("pragraph2");
 let existingSpan = document.getElementById("span2");
 let newSpan = document.createElement("span");
 
 newSpan.innerText = "New span element";
 parentElement.insertBefore(newSpan, existingSpan);


//chap 7
//example 1;;
function  my(){
alert ("buttonclicked");
}


//asignment
// do while loop
function numDowhile() { 
let i = 1; 
do { 
document.write(i + "<br>"); 
i++; 
} while (i <= 50); 
document.getElementById('jawaab').innerHTML = 'the finnal value' +i;
}

// break for loop
function BreakFor() { 
for (let i = 1; i <= 5; i++) { 
if (i === 3) { 
    break; 
} 
document.write(i + "<br>"); 
} 
}

// continue for loop
function ContinueFor() { 
for (let i = 1; i < 5; i++) { 
if (i === 3) { 
    continue; 
} 
document.write(i + "<br>"); 
} 
}

// nested loop
function nestedloop() { 
for (let i = 0; i < 3; i++) {
for (let j = 0; j < 3; j++) {
    document.write("i: " + i + " j: " + j + "<br>");
} 
} 
}

// if program
function numbf() { 
let number = 5;  
if (number > 0) { 
document.write("You Entered a Positive Number<br>"); 
} else {
document.write("You Entered a Negative Number<br>"); 
}
}

// if and else program
function numbg() { 
let number = -3; 
if (number > 0) { 
document.write("You Entered a Positive Number<br>"); 
} else { 
document.write("You Entered a Negative Number<br>"); 
} 
}

// display loop
function disp() { 
for (let i = 1; i <= 5; ++i) { 
document.write("Hello World!<br>");
} 
}

// temporary variable swap
function temp() { 
let a = 5; 
let b = 21; 
let temp = a; 
a = b; 
b = temp; 
document.write("After swapping: a = " + a + ", b = " + b + "<br>");
}

// lap 1
function peep() {
const outputDiv = document.getElementById('output');
outputDiv.innerHTML = "sufyaan<br>hassan<br>yuusuf";
}

// lap 2
function naaam() {
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const timeInMinutes = hours * 60 + minutes;

const outputDiv = document.getElementById('output');

switch (true) {
case timeInMinutes < 300: // Before 5:00 AM
    outputDiv.innerHTML = "It's before 5:00 AM";
    break;
case timeInMinutes >= 300 && timeInMinutes < 360: // From 5:00 AM to 5:59 AM
    outputDiv.innerHTML = "It's 5:00 AM";
    break;
case timeInMinutes < 420: // From 6:00 AM to 6:59 AM
    outputDiv.innerHTML = "It's morning";
    break;
case timeInMinutes < 720: // From 7:00 AM to 11:59 AM
    outputDiv.innerHTML = "It's daytime";
    break;
case timeInMinutes < 1080: // From 12:00 PM to 5:59 PM
    outputDiv.innerHTML = "It's afternoon";
    break;
default:
    outputDiv.innerHTML = "It's evening or night";
}
}

// lap 3
function calculater() {
const num1 = parseFloat(prompt("Enter first number:"));
const operator = prompt("Enter operator (+, -, *, /):");
const num2 = parseFloat(prompt("Enter second number:"));

let result;

switch (operator) {
case '+':
    result = num1 + num2;
    break;
case '-':
    result = num1 - num2;
    break;
case '*':
    result = num1 * num2;
    break;
case '/':
    result = num1 / num2;
    break;
default:
    result = "Invalid operator";
    break;
}

// Display the result in the output div
const outputDiv = document.getElementById('output');
outputDiv.innerHTML = `Result: ${result}`;
}
