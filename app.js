                             //Assignment 03 
//Q1
var city = prompt("Enter your City")
if("city===Karachi"){console.log("Welcome to the city of lights")}

//Q2
var gender = prompt("Enter your gender")
if(gender==="male"){console.log("Good morning Sir!")} 
else if (gender==="female"){console.log("Good morning maam !")}

//Q3
var signal = prompt("Signal color")
if(signal==="red"){console.log("Must stop")}
else if (signal==="yellow"){console.log("Ready to move")}
else if (signal==="green"){console.log("Go now!")}

//Q4
var fuel= prompt("Your remaining fuel?")
if(fuel <0.25){console.log("Please refuel your car")}
else if (fuel >0.25){console.log("You have fuel")}

//Q4
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

//Q5

// Taking inputs
var subject1 = parseFloat(prompt("Enter marks of Subject 1"));
var subject2 = parseFloat(prompt("Enter marks of Subject 2"));
var subject3 = parseFloat(prompt("Enter marks of Subject 3"));
var totalMarks = parseFloat(prompt("Enter total marks (e.g. 300)"));

// Calculations
var obtained = subject1 + subject2 + subject3;
var percentage = (obtained / totalMarks) * 100;

// Grade & remarks
var grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} 
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} 
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} 
else {
    grade = "Fail";
    remarks = "Sorry";
}

// Showing result
alert(
    "Marks Sheet\n\n" +
    "Total Marks: " + totalMarks + "\n" +
    "Marks Obtained: " + obtained + "\n" +
    "Percentage: " + percentage.toFixed(2) + "%\n" +
    "Grade: " + grade + "\n" +
    "Remarks: " + remarks
);

//Q6

var secretNumber = 5; 
var guess = parseInt(prompt("Guess the secret number (1 to 10):"));

if (guess === secretNumber) {
    console.log("Bingo! Correct answer");
}
else if (guess + 1 === secretNumber) {
    console.log("Close enough to the correct answer");
}
else {
    console.log("Try again!");
}

//Q7

var number = (prompt("Enter a number to see if divisible by 3:"));

// Check if the number is divisible by 3
if (number % 3 === 0) {
    alert(number + " is divisible by 3.");
} else {
    alert(number + " is not divisible by 3.");
}

// Q9


var number = parseInt(prompt("Enter a number to check even or odd:"));

// Check if the number is even or odd
if (number % 2 === 0) {
    alert(number + " is an even number.");
} else {
    alert(number + " is an odd number.");
}

//Q10
// Ask the user to enter the temperature
var temperature = parseFloat(prompt("Enter the temperature in °C:"));

// Check the temperature and show the appropriate message
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("Brr! It's very cold today.");
}

//Q11
// Take input from the user
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var operator = prompt("Enter the operation (+, -, *, /, %):");

// Perform calculation based on the operator
var result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Error! Division by zero is not allowed.";
    }
} else if (operator === "%") {
    if (num2 !== 0) {
        result = num1 % num2;
    } else {
        result = "Error! Division by zero is not allowed.";
    }
} else {
    result = "Invalid operator!";
}

// Show the result
alert("The result is: " + result);






                       //ASSIGNMENT 03 part 2





var char = prompt("checks whether the given input is a number, uppercase letter or lower case letter.");


 
var ascii = char.charCodeAt(0);


if (ascii >= 48 && ascii <= 57) {
    alert(char + " is a number.");
} else if (ascii >= 65 && ascii <= 90) {
    alert(char + " is an uppercase letter.");
} else if (ascii >= 97 && ascii <= 122) {
    alert(char + " is a lowercase letter.");
} else {
    alert(char + " is neither a number nor a letter.");
}


//Q2

var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));


if (num1 > num2) {
    alert(num1 + " is larger than " + num2);
} else if (num2 > num1) {
    alert(num2 + " is larger than " + num1);
} else {
    alert("Both numbers are equal.");
}


//Q3

var number = parseFloat(prompt("check wheter number is positive or negative or zero:"));

if (number > 0) {
    alert(number + " is a positive number.");
} else if (number < 0) {
    alert(number + " is a negative number.");
} else {
    alert("The number is zero.");
}

//Q4

var char = prompt("Enter a single character:");

var lowerChar = char.toLowerCase();

if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
    alert(true + " - It is a vowel.");
} else {
    alert(false + " - It is not a vowel.");
}
//Q5

var char = prompt("Enter a single character:");


var lowerChar = char.toLowerCase();


if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
    alert(true + " - It is a vowel.");
} else {
    alert(false + " - It is not a vowel.");
}

//Q6

// Store the correct password
var correctPassword = "classroom123";

// Ask the user to enter their password
var userPassword = prompt("Please enter your password:");

// Check if the user entered a password
if (!userPassword) {  // empty string or null
    alert("Please enter your password");
} 
// Check if the entered password matches the correct password
else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
} 
// If password is entered but does not match
else {
    alert("Incorrect password");
}


