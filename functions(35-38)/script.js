

document.write("<h1>FUNCTION</h1>");


/* Q1. Write a function that displays current date & time in your 
browser. */

document.write("<br> <br>");

function currDate() {
    var curentDate = new Date;
    return curentDate;
};

document.write(currDate());


/* Q2. Write a function that takes first & last name and then it 
greets the user using his full name. */


document.write("<br> <br>");


function userName (firstName , lastName) {
    var userName = firstName + lastName;
    return userName;
};

document.write(userName("Mahanoor", "khan"));


/* Q3. Write a function that adds two numbers (input by user) 
and returns the sum of two numbers. */


document.write("<br> <br>");


var userNum1 = +prompt("Enter your first number: ");
var userNum2 = +prompt("Enter your second number: ");


function sum(a, b) {
    var sum = a + b;
    return sum;
};

document.write(sum(userNum1 , userNum2));



/* Q4. Calculator:
Write a function that takes three arguments num1, num2 
& operator & compute the desired operation. Return and 
show the desired result in your browser. */


document.write("<br> <br>");


function calculator(num1, num2 , operator) {

    let result;

    if (operator = "+") {
        result = num1 + num2;
    }
    else if(operator = "-") {
        result = num1 + num2;
    }
    else if(operator = "*") {
        result = num1 + num2;
    }
    else if(operator = "/") {
        result = num1 + num2;
    }
    else if(operator = "%") {
        result = num1 + num2;
    }
    else if(operator = "**") {
        result = num1 ** num2;
    }
    else{
        result = "invalid operator"
    }
    
    return result;
};

document.write(calculator(12 , 2, "*"));


/* Q5. Write a function that squares its argument. */


document.write("<br> <br>");

function square(num) {
    var square = num ** 2;
    return square;
};

document.write(square(8))


/* Q6. Write a function that computes factorial of a number. */





/* 7. Write a function that take start and end number as inputs 
& display counting in your browser. */


document.write("<br> <br>");


var startFrom = +prompt("Where do you want to start counting" );

var endFrom = +prompt("Where do you want to end counting" );


function counting(start , end) {
    for(var i = startFrom; i <= endFrom; i++) {
        document.write(i , "<br>");
    }
};

counting(startFrom, endFrom);




/* Q8. Write a nested function that computes hypotenuse of a 
right angle triangle. 
Hypotenuse2 = Base2 + Perpendicular2
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare() */


document.write("<br> <br>");


let base = +prompt("Enter the base of a triangle: ");
let perpendicular = +prompt("Enter the perpendicular of a triangle: ");


function calcHypotenuse (base, perpendicular) {

    function square(number) {
        return number * number;
    }

    let hypotenuse = Math.sqrt(square(base) + square(perpendicular));

    return hypotenuse;
}

var hypotenuse = calcHypotenuse(base, perpendicular);

document.write("The value of hypotenuse is: " , hypotenuse);




/* Q9. Write a function that calculates the area of a rectangle.
 A = width * height
 Pass width and height in following manner:
i. Arguments as value
ii. Arguments as variables */



document.write("<br> <br>");

var width = +prompt("Enter the width of a rectangle: ");

var height = +prompt("Enter the height of a rectangle: ");


function rectangleArea (width , height) {
    var calculateArea = width * height;
    return calculateArea;
}

document.write(rectangleArea(3, 6));

document.write(rectangleArea(width , height));



/* Q10. Write a JavaScript function that checks whether a passed 
string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as 
forward, e.g., madam. */


document.write("<br> <br>");



var userString = prompt("Enter a string to check if it's a palindrome: ");

function checkPalindrome(str) {

    var sequenceStr = str.toLowerCase();

    var reversedStr = sequenceStr.split('').reverse().join('');

    if (sequenceStr === reversedStr) {
        document.write(str, " is a palindrome");
        return true;
    } else {
        document.write(str, " is not a palindrome");
        return false;
    }
}

checkPalindrome(userString);



/* Q11. Write a JavaScript function that accepts a string as a 
parameter and converts the first letter of each word of the 
string in upper case. 
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox' */


document.write("<br> <br>");


function capitalString(str) {
    var convertStr = str.split(" ");
    for (let i = 0; i < convertStr.length; i++) {
        convertStr[i] = convertStr[i][0].toUpperCase() + convertStr[i].slice(1);
    }
    return convertStr.join(" ");
}

var userString = 'the quick brown fox';
document.write(capitalString(userString)); 




/* Q12. Write a JavaScript function that accepts a string as a 
parameter and find the longest word within the string. 
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development' */






/* Q13. Write a JavaScript function that accepts two arguments, a 
string and a letter and the function will count the number of occurrences of the specified letter within the string. 
Sample arguments : 'JSResourceS.com', 'o' */





/* Q14. The Geometrizer
Create 2 functions that calculate properties of a circle, using the definitions here.
Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output 
"The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area 
is NN".
Circumference of circle = 2πr
Area of circle = πr2 */




