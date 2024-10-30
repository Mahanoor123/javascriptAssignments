document.write("<h1>MATH METHODS</h1>");




/* Q1. Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */





document.write("<br> <br>");

let userInteger = +prompt("Enter a positive integer: ");

document.write("1) Your number: " + userInteger + "<br>");

let roundInteger = Math.round(userInteger);

document.write("2) The round off value of number: " + roundInteger + "<br>");

let floorInteger = Math.floor(userInteger);

document.write("3) The floor value of number: " + floorInteger + "<br>");

let ceilInteger = Math.ceil(userInteger);

document.write("4) The ceil value of number: " + ceilInteger + "<br>");








/* Q2. Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */






document.write("<br> <br>");

let negativeInteger = +prompt("Enter a negative integer: ");

document.write("1) Your number: " + negativeInteger + "<br>");

let negativeRound = Math.round(negativeInteger);

document.write("2) The round off value of number: " + negativeRound + "<br>");

let negativeFloor = Math.floor(negativeInteger);

document.write("3) The floor value of number: " + negativeFloor + "<br>");

let negativeCeil = Math.ceil(negativeInteger);

document.write("4) The ceil value of number: " + negativeCeil + "<br>");






/* Q3. Write a program that displays the absolute value of a 
number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5 */






document.write("<br> <br>");

let value = prompt("Enter any value");
let absoluteValue = Math.abs(value);

document.write("The absolute value is " + absoluteValue);






/* Q4. Write a program that simulates a dice using random() 
method of JS Math class. Display the value of dice in your 
browser.: */





document.write("<br> <br>");

let randomValue = Math.random() * 6;

let diceValue = Math.floor(randomValue + 1);

document.write("Random dice value: " + diceValue);





/* Q5. Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browser */






document.write("<br> <br>");

let coinValue = Math.random() * 2 + 1;

coinValue = Math.floor(coinValue);

if (coinValue === 1) {
  document.write(coinValue + "<br>");
  document.write("random coin value: Tails");
} else if (coinValue === 2) {
  document.write(coinValue + "<br>");
  document.write("random coin value: Heads");
}





/* Q6. Write a program that shows a random number between 1 
and 100 in your browser. */





document.write("<br> <br>");

let randomNum = Math.floor(Math.random() * 100) + 1;

document.write("random number between 1 and 100: " + randomNum);





/* Q7. Write a program that asks the user about his weight. Parse 
the user input and display his weight in your browser. 
Possible user inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms */




document.write("<br> <br>");

let userWeight = prompt("Enter your weight in kilograms: ");
userWeight = parseFloat(userWeight).toFixed(1);

document.write("The weight of user is " + userWeight + " kilograms.");




/* Q8. Write a program that stores a random secret number from 
1 to 10 in a variable. Ask the user to input a number 
between 1 and 10. If the user input equals the secret 
number, congratulate the user. */





document.write("<br> <br>");

let userGuess = +prompt("Guess any number between 1 - 10");

let secretNum = parseInt(Math.random() * 10 + 1);

if (userGuess >= 1 && userGuess <= 10) {
  if (userGuess === secretNum) {
    document.write("Congratulations, you got it!! ");
  }
   else {
    document.write("Failed, try again ");
  }
}
else{
    alert("Please enter a valid number ");
}



