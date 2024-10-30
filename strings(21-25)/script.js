
document.write("<h1>STRING METHODS</h1>");


/* Q1. Write a program that takes two user inputs for first and 
last name using prompt and merge them in a new variable 
titled fullName. Greet the user using his full name. */




let firstName = prompt("Enter your first name: ").toLowerCase();
let lastName = prompt("Enter your last name: ").toLowerCase();

let fullName = firstName + " " + lastName;

document.write("Hi, " + fullName + " Welcome to our page!");




/* Q2. Write a program to take a user input about his favorite 
mobile phone model. Find and display the length of user 
input in your browser */




document.write("<br> <br>");


let fvrtPhone = prompt("What is your favorite mobile phone model: ").toLowerCase();

document.write("Your favorite phone model is: ", fvrtPhone);

document.write("<br>");

document.write("The length of your answer is: ", fvrtPhone.length);




/* Q3. Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser . */




document.write("<br> <br>");


let country = "Pakistan";
let idxCountry = country.indexOf("n");

document.write("country: ", country);

document.write("<br>");

document.write("index of 'n': ",idxCountry);




/* Q4. Write a program to find the last index of letter “l” in the 
word “Hello World” and display the result in your browser. */




document.write("<br> <br>");


let string = "Hello World";

let idxString = string.lastIndexOf("l");

document.write("string: ", string);

document.write("<br>");

document.write("last index of 'l': ", idxString);





/* Q5. Write a program to find the character at 3rd index in the 
word “Pakistani” and display the result in your browser. */





document.write("<br> <br>"); 


let myNationality = "Pakistani";

document.write("I am ", myNationality);

document.write("<br>");

let idxmyNationality = myNationality.charAt(3);

document.write("character at index 3 is ", idxmyNationality);





/* Q6. Repeat Q1 using string concat() method. */



// document.write("<br> <br>");

let fName = prompt("Enter your first name: ").toLowerCase();
let lName = prompt("Enter your last name: ").toLowerCase();

let fulName = fName.concat(lName);

document.write("Hi, ", fulName , " Welcome to my page!");





/* Q7.  Write a program to replace the “Hyder” to “Islam” in the 
word “Hyderabad” and display the result in your browser. */




document.write("<br> <br>");


let city = "Hyderabad";

document.write("City: ", city);

document.write("<br>");

city = city.replace("Hyder", "Islam");

document.write("after replacement: ", city);




/* Q8. Write a program to replace all occurrences of “and” in the
string with “&” and display the result in your browser.
var message = “Ali and Sami are best friends. They play cricket and 
football together.”; */



document.write("<br> <br>");


let sentence = "Ali and Sami are best friends. They play cricket and football together.";

document.write("sentence: ", sentence);

document.write("<br>");

sentence = sentence.replace( /and/gi , "&")

document.write("after replacement sentence: ", sentence);



/* Q9. Write a program that converts a string “472” to a number 
472. Display the values & types in your browser */



document.write("<br> <br>");


let value = "472";
document.write("value: ", value);

document.write("<br>");

document.write("type: ", typeof value);

document.write("<br> <br>");

let convertValue = Number(value);

document.write("Convert value: ", convertValue);

document.write("<br>");

document.write("type: ", typeof convertValue);





/* Q10. Write a program that takes user input. Convert and 
show the input in capital letters. */



document.write("<br> <br>");

let nut = prompt("Enter your favorite nuts");

document.write("favorite nut: ", nut);

document.write("<br>");

nut = nut.toUpperCase();

document.write("upperase letter ", nut);




/* Q11. Write a program that takes user input. Convert and 
show the input in title case. */




document.write("<br> <br>");

let userLang = prompt("Enter your favorite programming language: ");

document.write("favorite language: ", userLang);

document.write("<br>");

let titleLang = userLang.charAt(0).toUpperCase() + userLang.slice(1);

document.write("title case: ", titleLang);





/* Q12. Write a program that converts the variable num to 
string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser. */




document.write("<br> <br>");


let num = 35.36;

let newStr = num.toString().replace("." , "");

document.write(newStr);





/* Q13. Write a program to take user input and store username 
in a variable. If the username contains any special symbol 
among [@ . , !], prompt the user to enter a valid username. 
For character codes of [@ . */



document.write("<br> <br>");


let userName = prompt("Enter your username: ");

let isValidChar = true;

for(let i = 0; i < userName.length; i++) {
    let ASCII = userName.charCodeAt(i);

    if (ASCII === 33 || ASCII === 44 || ASCII === 46 || ASCII === 64) {
        isValidChar = false;
        alert("Please enter valid username");
        break;
    }
}
if (isValidChar) {
    document.write("Valid username");
}





/* Q14. You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an 
array. After searching, prompt the user whether the given 
item is found in the list or not.
Note: Perform case insensitive search. Whether the user 
enters cookie, Cookie, COOKIE or coOkIE, program 
should inform about its availability. Example: */





document.write("<br> <br>");

let bakeryItems = ["cake", "apple", "pie", "cookie", "chips", "patties"];
let userItem = prompt("What would you like to order: ").toLowerCase();
let isItemFound = false;

for (let i = 0; i < bakeryItems.length; i++) {
    if (userItem === bakeryItems[i]) {
        isItemFound = true;
        document.write(userItem , " is <strong>Available</strong> at index " , i , " in our bakery.");  
        break;
    }
}
if(!userItem) {
    document.write("We are sorry " , userItem , " is <strong>not Available</strong>  in our bakery.");  
}




/* Q15. Write a program to take password as an input from 
user. The password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements,
prompt the user to enter a valid password.
For character codes of a-z, A-Z & 0-9, refer to ASCII
table at the end of this document. */




// document.write("<br> <br>");



let userPassword = prompt("Enter your password: \n a. It should contain alphabets and numbers \n b. It should not start with a number \n c.It must at least 6 characters long");






/* Q16. Write a program to convert the following string to an 
array using string split method.
var university = “University of Karachi”;
Display the elements of array in your browser. */





document.write("<br> <br>");

let university = "UniversityofKarachi";



for (let i = 0; i < university.length; i++) {
    document.write(university[i])
}




/* 17. Write a program to display the last character of a user 
input. */


document.write("<br> <br>");

let userCountry = prompt("Enter your country name: ");

document.write("your country: ", userCountry);

document.write("<br>");

let lastIdx = userCountry[userCountry.length -1 ];

document.write("last character of your country: ", lastIdx);




/* Q18. You have a string “The quick brown fox jumps over the 
lazy dog”. Write a program to count number of 
occurrences of word “the” in given string. */




let phrase = "The quick brown fox jumps over the lazy dog";








