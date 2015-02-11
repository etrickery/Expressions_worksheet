//Eric Pfister
//February 9th, 2015
//SDI 1502
//Section 01
//Activity: Expression Worksheet





//Calculate the area of a rectangle
//Define variables (prompt for input)
var width;
var height;
var area;
var resultExample;

//Request user prompts for rectangle size
width = prompt("Enter the width of the rectangle: ", "20");
height = prompt("Enter the height of the rectangle: ", "15");

//Multiply the width x height to determine area and build the result statement
area = width * height;
resultExample = "A rectangle with a width equal to " + (width) + " and height equal to " + (height) + " will have an area of " + (area) + ".";

//Display the results in the console
console.log(resultExample);




//Dog years problem
//Define variables (prompt for input)
//dogConstant is a constant that is used to calculate based on 1 human year = 7 dog years
var dogConstant = 7;
var sparkyAge;

//Prompt the user for a value to define sparkyAge
sparkyAge = prompt("Enter Sparky's age in actual years", "7");

//Calculate Sparky's age in dog years
//The first variable is the solution to the dog years problem
//The second variable is the ouput to be displayed via console
//(This formula is inserting the variables, "sparkyAge" and "dogYears" into the statement through concatenating)
var dogYears = dogConstant * sparkyAge;
var result2 = "Sparky is " + (sparkyAge) + " human years old, which is " + (dogYears) + " in dog years.";

//Display answer in console log
console.log(result2);




//Slice of Pie part one
//Assume the person cutting the pizza is precise
var guests;     //Number of people at the party
var pizzaOrd;   //Number of pizzas ordered
var slices;     //Number slices per pizza
var result3;
var slicesPer;

//Prompt user for values to each variable
guests = prompt("How many guests are in your party? ", "10");
pizzaOrd = prompt("How many pizza's would you like? ", "4");
slices = prompt("How many slices per pizza would you like? ", "8");

//Determine the amount of slices each guest will receive
slicesPer = pizzaOrd * slices / guests;

//String to be displayed
result3 = "Each person ate " + (slicesPer) + " slices of pizza at the party.";

//Output detailing the results of the operation
console.log(result3);




//Slice of pie part two
//Defining variable that will rely on part one values for calculation and Sparky's cut
var sparkysCut;
var result4;


//Calculate value of sparkysCut and result4
sparkysCut = pizzaOrd * slices % guests;
result4 = "Sparky got " + (sparkysCut) + " slices of pizza";

//Display the value of result4 in the console
console.log(result4);




//Average shopping bill
//Define variables
var week = [0, 1, 2, 3, 4];
var total;
var average;
var result5;

//Request the five week shopping totals
week[0] = prompt("Enter amount spent during week 1", 10);
week[1] = prompt("Enter amount spent during week 2", 10);
week[2] = prompt("Enter amount spent during week 3", 10);
week[3] = prompt("Enter amount spent during week 4", 10);
week[4] = prompt("Enter amount spent during week 5", 10);


//Calculate the total of the
total = Number(week[0]) + Number(week[1]) + Number(week[2]) + Number(week[3]) + Number(week[4]);
average = total / 5;
result5 = "You have spent a total of $" + (total) + " on groceries over 5 weeks. That is an average of $" + (average) + " per week.";

//Display the results
console.log(result5);



















