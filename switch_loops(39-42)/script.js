


document.write("<h1> FUNCTIONS, SWITCH STATEMENTS, WHILe DO-WHILE LOOPS</h1>");



/* Q1. Write a custom function power ( a, b ), to calculate the value of 
a raised to b. */


document.write("<br> <br>");


function raisedValue (a, b) {
    var value = a ** b;
    return value;
}

document.write(raisedValue(2,5));


/* Q2. Any year is entered through the keyboard. Write a function to 
determine whether the year is a leap year or not.
Leap years ..., 2012, 2016, 2020, … */


document.write("<br> <br>");


function leapYear (year) {
    var leapyear;
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        document.write(year , " is a leap year");
    }
    else {
        document.write(year , " is not a leap year");
    }
    return year;
}

var yearEnter = 2024;
leapYear(yearEnter);



/* Q3. If the lengths of the sides of a triangle are denoted by a, b, and 
c, then area of triangle is given by
area = S(S − a)(S − b)(S − c)
where, S = ( a + b + c ) / 2
Calculate area of triangle using 2 functions */



document.write("<br> <br>");

function triangleArea (a, b, c){
    var semiperimetre = (a + b + c) / 2;
    return semiperimetre;

}


function totalAreaCalc(a, b, c){
    var s = triangleArea(a, b, c);
    var square = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return square;

}


document.write(totalAreaCalc(4, 5, 8));



/* Q4. Write a function that receives marks received by a student in 3 
subjects and returns the average and percentage of these
marks. there should be 3 functions one is the mainFunction 
and other are for average and percentage. Call those functions 
from mainFunction and display result in mainFunction. */


document.write("<br> <br>");


function calcAverage(sub1, sub2, sub3) {

    var averageMarks = (sub1 + sub2 + sub3) / 3;
    return averageMarks;
}

function calcePercentage(sub1, sub2, sub3, total) {
    var marksObtained = sub1 + sub2 + sub3;
    var percentage = (marksObtained / totalMarks) * 100;
    return percentage;
}





/* Q5. You have learned the function indexOf. Code your own custom 
function that will perform the same functionality. You can code 
for single character as of now. */


/* Q6. Write a function to delete all vowels from a sentence. Assume 
that the sentence is not more than 25 characters long */


/* Q7. Write a function with switch statement to count the number of 
occurrences of any two vowels in succession in a line of text. 
For example, in the sentence “Pleases read this application and give me gratuity”
Such occurrences are ea, ea, ui. */


/* Q8. The distance between two cities (in km.) is input through the 
keyboard. Write four functions to convert and print this 
distance in meters, feet, inches and centimeters. */



/* Q9. Write a program to calculate overtime pay of employees. 
Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
worked above 40 hours. Assume that employees do not work 
for fractional part of an hour. */


/* Q10. A cashier has currency notes of denominations 10, 50 and 
100. If the amount to be withdrawn is input through the 
keyboard in hundreds, find the total number of currency notes 
of each denomination the cashier will have to give to the 
withdrawer. */

