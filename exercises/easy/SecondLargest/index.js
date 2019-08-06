/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array) {
    array.sort(function(a, b){return a-b});
    var seclargest = array.slice(-2, -1);
    var seclargest = parseInt(seclargest); 
    console.log (seclargest);
    return seclargest; 
}

module.exports = secondLargest;
