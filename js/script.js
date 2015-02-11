//Eric Pfister
//February 9th, 2015
//SDI 1502
//Section 01
//Activity: Expression Worksheet





//Calculate the area of a rectangle
//Define variables (prompt for input)
var width;                  //width of rectangle
var height;                 //height of rectangle
var area;                   //area of rectangle
var resultExample;          //Concatenated results of this problem

//Request user prompts for rectangle size
width = prompt("Enter the width of the rectangle: ", "20");         //Prompt user for width
height = prompt("Enter the height of the rectangle: ", "15");       //Prompt user for height

//Multiply the width x height to determine area and build the result statement
area = width * height;      //Determine area to build result (which is next line)
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
guests = prompt("How many guests are in your party? ", "10");           //Prompt for number of guests
pizzaOrd = prompt("How many pizza's would you like? ", "4");            //Prompt for number of pizzas
slices = prompt("How many slices per pizza would you like? ", "8");     //Prompt for slices per pizza

//Determine the amount of slices each guest will receive
slicesPer = pizzaOrd * slices / guests;

//String to be displayed
result3 = "Each person ate " + (slicesPer) + " slices of pizza at the party.";

//Output detailing the results of the operation
console.log(result3);




//Slice of pie part two
//Defining variable that will rely on part one values for calculation and Sparky's cut
var sparkysCut;     //How many slices that Sparky will get (the remainder)
var result4;


//Calculate value of sparkysCut and result4
sparkysCut = pizzaOrd * slices % guests;
result4 = "Sparky got " + (sparkysCut) + " slices of pizza";

//Display the value of result4 in the console
console.log(result4);




//Average shopping bill
//Define variables
var week = [0, 1, 2, 3, 4];         //Array that will contain the amounts spent from each week
var total;                          //Total of each entry within that array
var average;                        //Average spent per week
var result5;                        //Concatenated results from this formula

//Request the five week shopping totals
week[0] = prompt("Enter amount spent during week 1", "10");     //Prompt user for each week, and insert value in array
week[1] = prompt("Enter amount spent during week 2", "10");
week[2] = prompt("Enter amount spent during week 3", "10");
week[3] = prompt("Enter amount spent during week 4", "10");
week[4] = prompt("Enter amount spent during week 5", "10");


//Calculate the total of the array values
total = Number(week[0]) + Number(week[1]) + Number(week[2]) + Number(week[3]) + Number(week[4]);        //Adding the values together
average = total / 5;  //Calculate the average spent each week
result5 = "You have spent a total of $" + (total) + " on groceries over 5 weeks. That is an average of $" + (average) + " per week.";

//Display the results
console.log(result5);





/*
 Discounts

 Calculate the discounted price for an item. Create an expression that will calculate the discounted price with and
 without sales tax. (It is acceptable for the result to have more than two digits after the decimal. $345.896 for
 example.)
 */

var price;
var discount;
var item;
var salesTax;
var total;
var totalWithTax;
var result6;

//Request the values for defined variables
price = prompt("Enter the price of the item: ", "100000");      //Prompt the user for each user generated value
discount = prompt("Enter the discount (out of 100): ", "20");   //Store each value in respective variable
item = prompt("Enter a description of the item: ", "Ferarri");
salesTax = prompt("Enter the sales tax: ", "7");

//Calculations are now performed
total = Number(price) - (Number(price) * (Number(discount)/100));        //Calculate the discounted price of the item
totalWithTax = total + (total * (Number(salesTax)/100))               //Calculate the total including tax
result6 = 'Your ' + (item) + ' was originally $' + (price) + ', but after a ' + (discount) + ' discount, it is now $' + (total) + ' without tax, and $' + (totalWithTax) + ' with tax.';

//Display the output of result6 in the console log
console.log(result6);













