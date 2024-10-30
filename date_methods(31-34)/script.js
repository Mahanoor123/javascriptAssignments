document.write("<h1>DATE METHODS</h1>");


/* Q1. Write a program that displays current date and time in 
your browser. */


document.write("<br><br>");


var currDate = new Date();

document.write(currDate);


/* Q2. Write a program that alerts the current month in words. 
For example December.*/


document.write("<br><br>");


let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


let currMonth = currDate.getMonth();


document.write("Current Month " , months[currMonth]);



/* Q3. Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show Sun. */



document.write("<br><br>");


let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


let currDay = currDate.getDay();



document.write("Today is " , weekDays[currDay].slice(0, 3));




/* Q4. Write a program that displays a message “It’s Fun day” if 
its Saturday or Sunday today. */



document.write("<br><br>");



let weekend = currDate.getDay();

document.write(weekend);


if (weekend == 0 || weekend == 6) {
    document.write("It's Fun day");
}




/* Q5. Write a program that shows the message “First fifteen 
days of the month” if the date is less than 16th of the month 
else shows “Last days of the month”. */




document.write("<br><br>");


let date = currDate.getDate();


if(date < 16) {
    document.write("First fifteen days of the month");
}
else{
    document.write("Last days of the month");
}



/* Q6. Write a program that determines the minutes since 
midnight, Jan. 1, 1970 and assigns it to a variable that 
hasn't been declared beforehand. Use any variable you like 
to represent the Date object. */



document.write("<br><br>");



let currentDate = new Date();

let miliSec = currDate.getTime();

let minutes = miliSec / 1000 * 60;


document.write("current date ", currentDate);

document.write("<br>");

document.write("Elapsed milisecond since January 1, 1970: ", miliSec);

document.write("<br>");

document.write("Elapsed minutes since January 1, 1970: ", minutes);




/* Q7. Write a program that tests whether it's before noon and 
alert “Its AM” else “its PM” */



document.write("<br><br>");


let time = currDate.getHours();


if (time <= 12) {
    document.write("It's AM");
}
else {
    document.write("It's PM");
}




/* Q8. Write a program that creates a Date object for the last day 
of the last month of 2020 and assigns it to variable named 
laterDate. */




document.write("<br><br>");


let laterDate = new Date(2020, 11, 31);

document.write("Later date: ", laterDate);




/* Q9. Create a date object of the starting date of this Ramadan 
and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015 */


document.write("<br><br>");



let firstRamadanDate = new Date(2025, 3, 2);

let oldRamadanDate = new Date(2015, 6, 18)

let ramadanDatePassed =  firstRamadanDate - oldRamadanDate;

let ramadanDays = ramadanDatePassed / (1000 * 60 * 60 * 24);

document.write(ramadanDays , " days have passed since 1st Ramadan, 2015");





/* Q10. Write a program that displays in your browser the 
seconds that elapsed between the reference date and the 
beginning of 2015.*/


document.write("<br><br>");


let referenceDate = new Date();

let previousDate = new Date(2015, 1, 1);


let dateDifference = referenceDate - previousDate;

let elapsedSec = dateDifference / 1000;

document.write("On reference date " , referenceDate , " , " , elapsedSec , " seconds had passed since beginning of 2015");




/* Q11. Create a Date object for the current date and time. 
Extract the hours, reset the date object an hour ahead and 
finally display the date object in your browser. */



document.write("<br><br>");


let curentDate = new Date();

let currHours = curentDate.getHours();

let oneHourAgo = curentDate - currHours;


document.write("current date: " , curentDate , " 1 hour ago, it was " , oneHrAgoDate);




/* Q12. Write a program that creates a date object and show the 
date in an alert box that is reset to 100 years back? */



document.write("<br><br>");



let tillDate = new Date();

tillDate.setFullYear(tillDate.getFullYear() - 100);


document.write("Date 100 years back: " + tillDate.toDateString());




/* Q13. Write a program to ask the user about his age. Calculate 
and show his birth year in your browser. */




document.write("<br><br>");



let userAge = +prompt("Enter your age: ");


let currYear = currDate.getFullYear();


let userBirthYear = currYear - userAge;


document.write("Your age is ", userAge , "<br>");

document.write("Your birth year is ", userBirthYear);





/* Q14. Write a program to generate your K-Electric bill in your
browser. All the amounts should be rounded off to 2 
decimal places. Display the following fields:
a. Customer Name
b. Current Monthc. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)
Where,Net Amount Payable (within Due Date) = Number of units * Charges per unit
& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge */






document.write("<br><br>");


let CustomerName = "ABC Customer";
let month = "February";
let numOfUnits = 235;
let chrgesPerUnit = 40;

let netAmount = numOfUnits * chrgesPerUnit;

let lateSurcharge = 346;

let grossAmount = netAmount + lateSurcharge;

document.write("<h2>K-Electric Bill</h2>");

document.write("Customer Name: " + "ABC Customer <br>");

document.write("Month: October <br>");

document.write("Number of units: " , numOfUnits , "<br>");

document.write("Charges per unit: " , chrgesPerUnit , "<br>");

document.write("Net Amount Payable: " , netAmount , "<br>");

document.write("Late payment Surcharge: " , lateSurcharge , "<br>");

document.write("Gross Amount Payable: " , grossAmount , "<br>");


