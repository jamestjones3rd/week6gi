'use strict';


// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
// Example 1:
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2

//Made a variable called numbers to hold values
var numbers = [1, 4, 7, 5, 9];

//created a function called avg to find average of numbers in the array
function avg(numbers) {
    var total = 0; //created a variable called total to hold the value of all number added
  
//for loop to iterate through the array numbers
    for (var i = 0; i < numbers.length; i++) {
      total += numbers[i]; //adding all numbers 
    }
  
    var average = total / numbers.length;
    return average;
  }


var result = avg(numbers);
console.log(result);  // Output: 4