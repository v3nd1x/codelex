/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

function isEven(n) {

var num = n.toString(); 
var lastChar = num[num.length -1];
console.log(lastChar); 

var ourArray = [0,2,4,6,8]; 


ourArray.indexOf("welcome");

if (lastChar == ourArray.includes(2)){
    return true
}   else {
    return false 
 }
}

console.log(isEven(22))

//     if (Math.round(n) % 2 == 0){
//         return true
//     } else {
//         return false 
//     }
// }

module.exports = isEven;
